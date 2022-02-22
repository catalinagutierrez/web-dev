/*
    NOTE: to execute run this command on mydir and use port 8000
        python3 -m http.server
    This bypasses the browsers protection against local files accessing 
    local resources by enabling a web server.
*/

// alert("Hello World!");

import TodoList from "./TodoList.js";

$("#wd-todo").append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);
