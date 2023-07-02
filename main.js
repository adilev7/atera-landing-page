const slideshowWrap = document.querySelector('.slideshow-wrap');
const dotsWrap = slideshowWrap.querySelector('.dots-wrap');
const imagesWrap = slideshowWrap.querySelector('.slideshow-images');
dotsWrap.addEventListener('click', (e) => {
  const newDot = e.target;
  if(!newDot.classList.contains('dot') || newDot.classList.contains('dot-filled')) return;
  const oldDot = e.currentTarget.querySelector('.dot-filled');
  oldDot.classList.remove('dot-filled');
  newDot.classList.add('dot-filled');
  const slideIdx = Number(newDot.dataset.index);
  imagesWrap.style.transform = `translateX(-${slideIdx * 100}%)`
});