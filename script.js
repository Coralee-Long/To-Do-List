window.addEventListener("load", () => {
	const form = document.querySelector("#add-task-form");
	const input = document.querySelector("#add-task-input");
	const list_item = document.querySelector("#current-box");
	const defaultCurrent = document.querySelector("em");
	const defaultBox = document.getElementById("default-current");
	const defaultCompletedBox = document.getElementById("default-completed");
	const addTaskBtn = document.getElementById("add-task-submit");

	addTaskBtn.addEventListener("click", () => {
		let localItems = JSON.parse(localStorage.getItem("localItem"));
		if (localItems === null) {
			taskList = [];
		} else {
			taskList = localItems;
		}
		taskList.push(input.value);
		localStorage.setItem("localItem", JSON.stringify(taskList));
		showList();
	});

	function showList() {
		let output = "";
		let taskListShow = document.getElementById("current-task-header");
		let localItems = JSON.parse(localStorage.getItem("localItem"));
		if (localItems === null) {
			taskList = [];
		} else {
			taskList = localItems;
		}
		taskList.forEach((data, index) => {
			output += `
			<div class="task">
				${data}
			</div>
				
		  	
				
			`;
		});
		taskListShow.innerHTML = output;
	}
	showList();

	function deleteItem(index) {
		let localItems = JSON.parse(localStorage.getItem("localItem"));
		taskList.splice(index, 1);
		localStorage.setItem("localItem", JSON.stringify(taskList));
		showList();
	}

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const task = input.value;

		if (!task) {
			alert(`\n\n\n****** PLEASE ADD A TASK OR IT WON'T WORK!!!! ******\n\n`);
		} else {
			console.log("Success");

			defaultCurrent.style.visibility = "none";
			defaultBox.style.display = "none";

			//Create .task div
			const task_el = document.createElement("div");
			task_el.classList.add("task");

			//Create .task-check div
			const taskCheckDiv = document.createElement("div");
			taskCheckDiv.classList.add("task-check");

			task_el.appendChild(taskCheckDiv);

			// Creating .checkbox button
			const task_checkbox_el = document.createElement("button");
			task_checkbox_el.classList.add("checkbox");
			// console.log(task_checkbox_el)

			// Creating checkbox icon
			const task_checkbox_icon_el = document.createElement("i");
			task_checkbox_icon_el.className = "fas fa-check fa-lg";

			// Creating Text Input
			const task_input_el = document.createElement("input");
			task_input_el.classList.add("text");
			task_input_el.type = "text";
			task_input_el.value = task;
			task_input_el.setAttribute("readonly", "readonly");

			//Appending Children
			taskCheckDiv.appendChild(task_checkbox_el);
			taskCheckDiv.appendChild(task_input_el);
			task_checkbox_el.appendChild(task_checkbox_icon_el);

			// Creating .actions div
			const task_actions_el = document.createElement("div");
			task_actions_el.classList.add("actions");

			// Creating .edit button
			const task_edit_el = document.createElement("button");
			task_edit_el.classList.add("edit");

			// Creating edit icon
			const task_edit_icon_el = document.createElement("i");
			task_edit_icon_el.className = "fas fa-edit fa-lg";

			// Creating .delete button
			const task_delete_el = document.createElement("button");
			task_delete_el.classList.add("delete-me");

			// Creating delete icon
			const task_delete_icon_el = document.createElement("i");
			task_delete_icon_el.className = "fas fa-trash-alt fa-lg";

			// Appending children to parent:
			task_actions_el.appendChild(task_edit_el);
			task_edit_el.appendChild(task_edit_icon_el);

			// Appending children to parent:
			task_actions_el.appendChild(task_delete_el);
			task_delete_el.appendChild(task_delete_icon_el);

			// Appending .actions to .task parent
			task_el.appendChild(task_actions_el);

			// Appending .task to .list (#tasks) parent
			list_item.appendChild(task_el);

			input.value = "";

			task_edit_el.addEventListener("click", () => {
				if (task_edit_el.innerHTML.includes("fa-edit")) {
					task_input_el.removeAttribute("readonly");
					task_input_el.focus();
					task_edit_el.innerHTML = `<i class="fas fa-save fa-lg"></i>`;
				} else {
					task_edit_el.innerHTML = `<i class="fas fa-edit fa-lg"></i>`;
					task_input_el.setAttribute("readonly", "readonly");
				}
			});

			task_delete_el.addEventListener("click", () => {
				deleteItem(index);
				console.log(list_item.childElementCount);
				if (list_item.childElementCount == 2) {
					defaultCurrent.style.visibility = "block";
					defaultBox.style.display = "block";
					list_item.removeChild(task_el);
				} else {
					list_item.removeChild(task_el);
				}
			});

			//  Move checked item to "completed" box:

			task_checkbox_el.addEventListener("click", () => {
				const removedChild = list_item.removeChild(task_el);
				console.log(removedChild);
				defaultCompletedBox.style.display = "none";
				let completedBox = document.querySelector("#completed-box");
				completedBox.appendChild(removedChild);
			});
		}
	});
});
