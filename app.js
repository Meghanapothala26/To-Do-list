function addtask() {
    const input = document.getElementById("todo-task");
    const value = input.value;

    // Check empty FIRST
    if (value === "") {
        alert("please enter a task");
        return;
    }

    const newtask = document.createElement("li");
    newtask.textContent = value;

    const list = document.getElementById("lists");
    list.appendChild(newtask);

    // Save to localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Add delete button
    deletetask(newtask);

    // Clear input
    input.value = "";
}


function deletetask(newtask) {
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";

    deletebtn.onclick = function () {
        newtask.remove();

        // Remove from localStorage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t !== newtask.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    newtask.appendChild(deletebtn);
}


//  Load tasks when page opens
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.textContent = task;

        deletetask(li);
        document.getElementById("lists").appendChild(li);
    });
};