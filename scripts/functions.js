const input = document.querySelector(".input");
const list = document.querySelector(".list");

function addTask() {
    const task = input.value.trim();
    if (task === "") {
        return
    }
    createItem(task);
    input.value = "";
}
function createItem(text) {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = text;

    list.appendChild(item)
}


export { addTask};