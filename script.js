AOS.init({
  duration: 1000,
  once: true
});

const btn = document.querySelector('.whatsapp-float');

let isDragging = false;
let offsetX, offsetY;

btn.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - btn.offsetLeft;
  offsetY = e.clientY - btn.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  btn.style.left = e.clientX - offsetX + 'px';
  btn.style.top = e.clientY - offsetY + 'px';
  btn.style.right = 'auto';
  btn.style.bottom = 'auto';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Skill toggle on click
document.querySelectorAll('.skill-toggle').forEach(skill => {
  skill.addEventListener('click', () => {
    const detail = skill.querySelector('.skill-detail');
    detail.style.display =
      detail.style.display === 'block' ? 'none' : 'block';
  });
});
