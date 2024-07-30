import './style.scss'

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;

  function move() {
    curX += (tgX - curX) / 6;
    curY += (tgY - curY) / 6;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move); // Continuously call move
  }

  requestAnimationFrame(move);

  window.addEventListener('mousemove', (e) => {
    tgX = e.clientX;
    tgY = e.clientY;
  });
});