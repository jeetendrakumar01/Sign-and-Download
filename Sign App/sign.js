// Get canvas element
const canvas = document.getElementById('myCanva');
const ctx = canvas.getContext('2d');

// Set initial white background
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Basic drawing function
let drawing = false;

canvas.onmousedown = () => drawing = true;
canvas.onmouseup = () => drawing = false;
canvas.onmousemove = (e) => {
  if (!drawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
};

// Color picker
document.getElementById('ColorPicker').oninput = (e) => {
  ctx.strokeStyle = e.target.value;
};

// Background color
document.getElementById('canva').oninput = (e) => {
  ctx.fillStyle = e.target.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

// Line width
document.querySelector('.fontSize').onchange = (e) => {
  ctx.lineWidth = e.target.value;
};

// Clear button
document.querySelector('.btn-warning').onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// Save button
document.querySelector('.btn-success').onclick = () => {
  const link = document.createElement('a');
  link.download = 'signature.png';
  link.href = canvas.toDataURL();
  link.click();
};

// Retrieve button
document.querySelector('.btn-danger').onclick = () => {
  alert('Retrieve function would go here');
};
