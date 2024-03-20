let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
  }
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
  showSlide(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function() {
  const dotsContainer = document.querySelector('.carousel-dots');
  const slides = document.querySelectorAll('.carousel-item');
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      showSlide(index);
    });
    dotsContainer.appendChild(dot);
  });
  showSlide(slideIndex);
});
