const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let index = 0;

slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots button');
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function goToSlide(i) {
    index = i;
    track.scrollTo({
        left: slides[i].offsetLeft,
        behavior: 'smooth'
    });
    updateDots();
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    goToSlide(index);
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    goToSlide(index);
});

updateDots();