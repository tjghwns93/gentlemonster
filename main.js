/////////////////// swiper /////////////////////

const bannerSwiper = new Swiper('.banner .swiper', {
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 500,
  },
});

const sonProductSwiper = new Swiper(".son-product-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".son-product-next",
    prevEl: ".son-product-prev",
  },
});

for (let i = 1; i <= 7; i++) {
  new Swiper(`.son-product-${i}`, {
    allowTouchMove: false,
    loop: true,
    navigation: {
      nextEl: `.son-product-${i}-next`,
      prevEl: `.son-product-${i}-prev`,
    },
  });
}


/////////////////// son //////////////////

const sonHeader = document.querySelectorAll('.son-header-ani');
const sonVideo = document.querySelector('.son-video');

window.addEventListener('scroll', () => {

  sonHeader.forEach(a => {
    if (a.getBoundingClientRect().top < (window.innerHeight - 80)) {
      a.style.transform = 'none';
    } else {
      a.style.transform = 'translateY(100px)';
    };
  });

  if (sonVideo.getBoundingClientRect().top < window.innerHeight && sonVideo.currentTime == 0) {
    sonVideo.play();
  } else if(sonVideo.getBoundingClientRect().top < window.innerHeight && sonVideo.currentTime == 100){
    sonVideo.pause();
  }else if(sonVideo.getBoundingClientRect().top > window.innerHeight){
    sonVideo.currentTime = 0;
  }

});