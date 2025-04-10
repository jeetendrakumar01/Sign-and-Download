

const itemInput = document.getElementById('item');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('addBtn');
const expenseList = document.getElementById('expenseList');

let editMode = false;
let itemBeingEdited = null;


addBtn.addEventListener('click', function () {
  const item = itemInput.value;
  const amount = amountInput.value;

  if (item === '' || amount === '') {
    alert("Please enter both item and amount");
    return;
  }

  if (editMode) {
   
    itemBeingEdited.innerText = `${item} - ₹${amount}`;
    addEditDeleteButtons(itemBeingEdited);
    addBtn.innerText = "Add"; 
    editMode = false;
    itemBeingEdited = null;
  } else {
   
    const li = document.createElement('li');
    li.innerText = `${item} - ₹${amount}`;
    addEditDeleteButtons(li);
    expenseList.appendChild(li);
  }

  itemInput.value = '';
  amountInput.value = '';
});

function addEditDeleteButtons(li) {
  const editBtn = document.createElement('button');
  editBtn.innerText = "✏️";
  editBtn.style.marginLeft = "10px";

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = "🗑️";
  deleteBtn.style.marginLeft = "5px";

  
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  
  editBtn.addEventListener('click', function () {
    const [itemText, amountText] = li.innerText.split(" - ₹");
    itemInput.value = itemText;
    amountInput.value = amountText;
    editMode = true;
    itemBeingEdited = li;
    addBtn.innerText = "Update Data"; 
  });

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
}
