function get_todos() { /*This will fetch the content of the to do list */
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');

    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() { /*This function will be called when the user clicks on the button */
    var task = document.getElementById('task').value; /*gets elements ID and will retrieve the value typed in */
    var todos = get_todos();

    todos.push(task); /*adds task to the list*/
    localStorage.setItem('todo', JSON.stringify(todos)); /*used to store the item to the local storage*/

    show();

    return false;
}

function clearDefault(a) { /*This function will clear the input box after you've added the task and setthe input to blank*/
    if (a.defaultValue == a.value) {
        a.value = ""
    }
};

function remove() { /*This will clear the selected task if the user clicks remove*/
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();/*then will call the show function */

    return false;
}

function show() { /*This will show the current to do list stored in the database */
    var todos = get_todos();
    var html = '<ul>';

    for(var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class = "remove" id = "">' + 'Delete</button> </li>';

    html += '</ul>';

    var buttons = document.getElementsByClassName('remove');
        for (var i = 0; i < buttons.length; i++);
        buttons[i].addEventListener('click', remove); /*when button is clicked it will trigger the remove function*/
    };
}

document.getElementById('add').addEventListener('click' , add); /*when button is clicked it will trigger the add function*/
show(); /*then will call the show function */
