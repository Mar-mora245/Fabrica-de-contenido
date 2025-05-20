let currentIndex = 0;
let slides, dots, interval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentIndex = index;
}

function changeSlide(direction) {
  clearInterval(interval);
  let newIndex = (currentIndex + direction + slides.length) % slides.length;
  showSlide(newIndex);
  autoSlide();
}

function goToSlide(index) {
  clearInterval(interval);
  showSlide(index);
  autoSlide();
}

function autoSlide() {
  interval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  slides = document.querySelectorAll('.slides'); // ← CORREGIDO (antes decía '.slide')
  dots = document.querySelectorAll('.dot');
  showSlide(0);
  autoSlide();
});

