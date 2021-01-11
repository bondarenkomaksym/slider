let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let slider = document.querySelector('.slider');

let currentImage = 1;
slider.src = `./src/img/${currentImage}.jpg`;

onPrevBtn = () => {
  console.log('prev');
}
onNextBtn = () => {
  console.log('next');
}

prevBtn.addEventListener('click', onPrevBtn);
nextBtn.addEventListener('click', onNextBtn);