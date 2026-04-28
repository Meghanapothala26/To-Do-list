function addtask() {
    const newtask = document.createElement("li")
    const list = document.getElementById("lists")   //to access the list in html  which is having id as list in ul in html
    list.appendChild(newtask);
    newtask.textContent = document.getElementById("todo-task").value;  //to dipslay the task in the list
    document.getElementById("todo-task").value = "";  //to clear the input field after adding the task
    deletetask(newtask)

}
function deletetask(newtask) {
    const deletebtn = document.createElement('button') //creating button for deleting task
    deletebtn.textContent = "Delete"
    newtask.appendChild(deletebtn);
    deletebtn.onclick = function () { // function to delete the task when the button is clicked
        newtask.remove();
    }
}