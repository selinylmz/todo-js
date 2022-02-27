const addForm = document.querySelector("#addTaskForm");
const txtTaskName = document.querySelector("#txtTaskName");
const taskList = document.getElementById("task-list");
const btnDeleteAll = document.getElementById("btnDeleteAll");
const items = JSON.parse(localStorage.getItem("items")) || [];

loadItems();
eventListeners();
function loadItems() {
  items.forEach(function (item) {
    createItem(item);
  });
}


function createItem(text) {
  taskList.innerHTML += `<li class="list-group-item list-group-item-secondary d-flex justify-content-between">${text}
      <a href="#" class=""><i class="fas fa-times"></i></a>
  </li>`;
}
function eventListeners() {
  addForm.addEventListener("submit", addNewItem);
  taskList.addEventListener("click", deleteItem);
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function addNewItem(e) {
  e.preventDefault();
  txtTaskName.value === ""
    ? alert("Inputa bir deger girmediniz")
    : createItem(txtTaskName.value);
    items.push(txtTaskName.value)
    localStorage.setItem('items',JSON.stringify(items));
}
function deleteItem(e) {
  e.target.classList.contains("fas")
    ? confirm("Silmek istediginize emin misin?") &&
      e.target.parentElement.parentElement.remove()
    : false;
}
function deleteAllItems() {
  if (confirm("Butun todolari silmek istiyor musun?")) {
    taskList.remove();
  }
}

function cleareItem() {}
