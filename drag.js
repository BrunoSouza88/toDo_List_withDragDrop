const drag = document.querySelectorAll(".task");
const drop = document.querySelectorAll(".swim-lane");

drag.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

drop.forEach((zone) => {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault();

    const bottomTask = insertAboveTask(zone, event.clientY);
    const curTask = document.querySelector(".is-dragging");

    if(!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask)
    }
  })
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-draggin)");

  let closestTast = null;
  let closestOffSet = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offSet = mouseY - top;

    if(offSet < 0 && offSet > closestOffSet){
      closestOffSet = offSet;
      closestTast = task;
    }
  })
  return closestTast;
};