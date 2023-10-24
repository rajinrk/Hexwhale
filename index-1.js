// code to manage height of container

    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');
    
    // Function to update the parent's height based on the child's height
    function updateParentHeight() {
      const childHeight = child.offsetHeight; 
      parent.style.height = childHeight + 'px'; 
    }
    updateParentHeight();
    window.addEventListener('resize', updateParentHeight );

   

//below code for corousel

const carousel = document.querySelector('.sec-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;
let slideResIndex = 0

prevBtn.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

let windowWidth = window.innerWidth
function showSlide(n) {
  const slides = document.querySelectorAll('.sec-carousel-slide');
  if(windowWidth<542){ 
    if (n < 0) {
        slideIndex = slides.length - 2; 
      } else if (n >= 1.25*slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex = n;
      }
      const offset = -slideIndex * 100; // 100% width per slide
      carousel.style.transform = `translateX(${offset}%)`;
  }
  else{
    if (n < 0) {
        slideIndex = slides.length - 2; 
      } else if (n >= slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex = n;
      }
      const offset = -slideIndex * 50; // 50% width per slide
      carousel.style.transform = `translateX(${offset}%)`;
  } 
}
showSlide(slideIndex);
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    showSlide(0);
   
  });


  