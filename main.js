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
const sonFace = document.querySelectorAll('.son-cut-face img');
const sonFace1 = document.querySelector('.son-cut-face1');


window.addEventListener('scroll', () => {

  const sonFaceTop = sonFace1.getBoundingClientRect().top;
  const sonFaceRatio = (window.innerHeight - sonFaceTop) / window.innerHeight;


  sonHeader.forEach(a => {
    if (a.getBoundingClientRect().top < (window.innerHeight - 80)) {
      a.style.transform = 'none';
    } else {
      a.style.transform = 'translateY(100px)';
    };
  });

  if (sonVideo.getBoundingClientRect().top < window.innerHeight && sonVideo.currentTime == 0) {
    sonVideo.play();
  } else if (sonVideo.getBoundingClientRect().top < window.innerHeight && sonVideo.currentTime == 100) {
    sonVideo.pause();
  } else if (sonVideo.getBoundingClientRect().top > window.innerHeight) {
    sonVideo.currentTime = 0;
  }

  if(sonFaceTop > (window.innerHeight * 1) / 3 && sonFaceTop <= window.innerHeight){

    sonFace.forEach(a=>{
      a.style.transform = `scale(${1.5 - sonFaceRatio * 0.75})`;
    })
  }

});