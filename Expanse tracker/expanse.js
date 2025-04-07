
// element select karo
const itemInput = document.getElementById('item');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('addBtn');
const expenseList = document.getElementById('expenseList');

let editMode = false;
let itemBeingEdited = null;

// Button pe click hone par
addBtn.addEventListener('click', function () {
  const item = itemInput.value;
  const amount = amountInput.value;

  if (item === '' || amount === '') {
    alert("Please enter both item and amount");
    return;
  }

  if (editMode) {
    // Edit mode: update old item
    itemBeingEdited.innerText = `${item} - ₹${amount}`;
    addEditDeleteButtons(itemBeingEdited);
    addBtn.innerText = "Add"; // Button text wapas "Add"
    editMode = false;
    itemBeingEdited = null;
  } else {
    // Normal Add mode
    const li = document.createElement('li');
    li.innerText = `${item} - ₹${amount}`;
    addEditDeleteButtons(li);
    expenseList.appendChild(li);
  }

  itemInput.value = '';
  amountInput.value = '';
});

// Button add karne ka function
function addEditDeleteButtons(li) {
  const editBtn = document.createElement('button');
  editBtn.innerText = "✏️";
  editBtn.style.marginLeft = "10px";

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = "🗑️";
  deleteBtn.style.marginLeft = "5px";

  // Delete Logic
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  // Edit Logic
  editBtn.addEventListener('click', function () {
    const [itemText, amountText] = li.innerText.split(" - ₹");
    itemInput.value = itemText;
    amountInput.value = amountText;
    editMode = true;
    itemBeingEdited = li;
    addBtn.innerText = "Update Data"; // Button ka naam badal do
  });

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
}
