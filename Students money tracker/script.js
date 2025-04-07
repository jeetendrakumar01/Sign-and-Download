
const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');


const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');


let transactions = [];


function updateBalance() {
  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  
  const expense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  
  const balance = income - expense;

  
  balanceEl.textContent = balance;
  incomeEl.textContent = income;
  expenseEl.textContent = expense;
}


function addTransaction(description, amount, type) {
  const transaction = {
    id: Date.now(),
    description,
    amount: parseFloat(amount),
    type,
  };

  transactions.push(transaction);

  
  const listItem = document.createElement('li');
  listItem.classList.add(type === 'income' ? 'income' : 'expense');
  listItem.innerHTML = `
    ${description} 
    <span>₹${amount}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  transactionList.appendChild(listItem);

  updateBalance();
}


function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  
  transactionList.innerHTML = '';
  transactions.forEach((transaction) => {
    addTransaction(transaction.description, transaction.amount, transaction.type);
  });

  updateBalance();
}


transactionForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const description = document.getElementById('description').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const type = document.getElementById('transaction-type').value;

  if (description === '' || amount === '' || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid description and amount.');
    return;
  }

  addTransaction(description, amount, type);

  
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
});
