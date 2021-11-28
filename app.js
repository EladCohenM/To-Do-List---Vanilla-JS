const addInput = document.querySelector("#add-input");
const addBtn = document.querySelector("#footer-btn")
const defaultItem = document.querySelector(".todo-item-example .todo-item-container");
const itemsContainer = document.querySelector(".items");

var removeBtns = document.querySelectorAll("button.remove");

var editBtns = document.querySelectorAll("button.edit")

// add item
function addItem() {
    const item = defaultItem.cloneNode(true)
    const text = addInput.value
    item.querySelector("p").innerHTML = text;
    if (item.querySelector("p").innerHTML != "") {
        itemsContainer.appendChild(item);
        addInput.value = "";
        removeBtns = document.querySelectorAll("button.remove");
    } else {
        alert("Please enter an input");
    };
};

addBtn.addEventListener("click", addItem);
addInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        addBtn.click();
    };
});

// remove item
function removeItems(btn) {
    const item = btn.closest(".todo-item-container");
    item.remove();
    removeBtns = document.querySelectorAll("button.remove");
    removing();
};

// edit item


function editItems(btn) {
    const item = btn.closest(".todo-item-container");
    const children = item.children;
    children[0].style.display = "none";
    children[1].style.display = "none";
    const editBar = document.querySelector(".edit-container").cloneNode(true);
    item.appendChild(editBar);
    editBar.children[0].value = children[0].innerText;
    editBar.children[1].addEventListener("click", () => {
        let text = editBar.children[0].value;
        editBar.remove();
        children[0].style.display = "block";
        children[1].style.display = "block";
        children[0].innerText = text;
    });
};

//event listeners
function eventListeners() {
    removeBtns.forEach(btn => {
        btn.addEventListener("click", () => removeItems(btn))
    });
    editBtns.forEach(btn => {
        btn.addEventListener("click", () => editItems(btn))
    });
};

eventListeners();