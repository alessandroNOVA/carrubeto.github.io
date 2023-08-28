const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function showSlide(index) {
    sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

showSlide(slideIndex);

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
