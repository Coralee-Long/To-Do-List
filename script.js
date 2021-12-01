window.addEventListener("load", () => {
  const form = document.querySelector("#add-task-form");
  const input = document.querySelector("#add-task-input");
  const list_item = document.querySelector("#current-box");
  const defaultCurrent = document.querySelector("em");
  const defaultBox = document.getElementById("default-current");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert(`\n\n\n****** PLEASE ADD A TASK OR IT WON'T WORK!!!! ******\n\n`);
    } else {
      console.log("Success");

      defaultCurrent.style.display = "none";
      defaultBox.style.display = "none";

      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_el_text = document.createElement("div");
      task_el_text.classList.add("task-text");
      task_el_text.innerText = task;

      const task_el_actions = document.createElement("div");
      task_el_actions.classList.add("task-actions");
      task_el_actions.innerHTML = `<button class="button is-info is-small is-light" id="edit"><i class="fas fa-marker"></i></button>
            <button class="button is-danger is-small is-light" id="delete"><i class="fas fa-trash"></i></button>
            <button class="button is-success is-small is-light" id="checkbox"><i class="fas fa-check" id="checkbox-icon"></i></button>`;

      task_el.appendChild(task_el_text);
      task_el.appendChild(task_el_actions);

      list_item.appendChild(task_el);

      input.value = "";
    }
  });
});
