function addtask() {
    const input = document.getElementById("todo-task");
    const value = input.value.trim();

    if (value === "") {
        alert("please enter a task");
        return;
    }

    // create task in UI
    createTaskElement(value);

    // save to localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
}


function createTaskElement(value) {
    const li = document.createElement("li");
    li.textContent = value;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";

    deletebtn.onclick = function () {
        li.remove();

        // remove from localStorage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t !== value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    li.appendChild(deletebtn);
    document.getElementById("lists").appendChild(li);
}


// load tasks on page load
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        createTaskElement(task);
    });
};