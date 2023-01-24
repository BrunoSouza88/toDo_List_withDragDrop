
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const toDoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  toDoLane.appendChild(newTask);

  localStorage.setItem("task", newTask)

  if(localStorage !== null) {
    localStorage.getItem("task")
  }

  input.value = "";
});

 
