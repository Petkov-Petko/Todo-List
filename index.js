let items = [];
const input = document.querySelector("#input");
const submit = document.querySelector("addItemBtn");
const itemsDiv = document.querySelector("#items");

document.querySelector("#submit").addEventListener("click", () => {
    addItem();
})



function renderItems() {
  itemsDiv.innerHTML = null;

  for (const [index, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.className="container"

    const text = document.createElement("p");
    text.textContent = item;

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => removeItem(index);

    container.appendChild(text);
    container.appendChild(btn);

    itemsDiv.appendChild(container);
  }
}

renderItems();

function loadItems() {
    const oldItems = localStorage.getItem('items');
    if(oldItems) {
        items = JSON.parse(oldItems);
        renderItems();
    }
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem("items", stringItems);
}

function addItem() {
  const value = input.value;
  if (!value) {
    alert("Please enter an item!");
    return;
  }
  items.push(value);
  renderItems();
  saveItems()
}

function removeItem(index) {
  items.splice(index, 1);
  renderItems();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems())