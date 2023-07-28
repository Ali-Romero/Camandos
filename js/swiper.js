function initSwiperFinance() {
  const swiper = new Swiper('.swiper-finance', {
    speed: 400,
    effect: 'coverflow',
    pagination: {
      el: '.finance-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      200: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

function initSwiperProfit() {
  const swiper = new Swiper('.swiper-profit', {
    speed: 400,
    effect: 'coverflow',
    pagination: {
      el: '.profit-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      200: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

function initSwiperAbout() {
  const swiper = new Swiper('.swiper-about', {
    speed: 400,
    effect: 'coverflow',
    pagination: {
      el: '.about-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      200: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

function initSwiperGallery() {
  const swiper = new Swiper('.swiper-gallery', {
    speed: 400,
    effect: 'coverflow',
    slidesPerView: 3,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-gallery-next',
      prevEl: '.swiper-gallery-prev',
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperFinance()
  initSwiperProfit()
  initSwiperAbout()
  initSwiperGallery()
})
