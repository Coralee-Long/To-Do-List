const Local_Storage_Key = "task.storage";
let storage = JSON.parse(localStorage.getItem(Local_Storage_Key)) || [];

function renderSave() {
	save();
	render();
}
function save() {
	localStorage.setItem(Local_Storage_Key, JASON.stringify(storage));
}
