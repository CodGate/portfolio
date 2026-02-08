AOS.init({
  duration: 1000,
  once: true
});

const dragBtn = document.querySelector('.whatsapp-float');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

dragBtn.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - dragBtn.getBoundingClientRect().left;
  offsetY = e.clientY - dragBtn.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  dragBtn.style.left = `${e.clientX - offsetX}px`;
  dragBtn.style.top = `${e.clientY - offsetY}px`;
  dragBtn.style.right = 'auto';
  dragBtn.style.bottom = 'auto';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
