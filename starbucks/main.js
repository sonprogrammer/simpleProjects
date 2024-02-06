const searchEl = document.querySelector('.search')
const searchInput = searchEl.querySelector('input')

searchEl.addEventListener('click', () => {
  searchInput.focus()
})

searchInput.addEventListener('focus', () => {
  searchEl.classList.add('focused')
  searchInput.setAttribute('placeholder', '통합검색')
})

searchInput.addEventListener('blur', () => {
  searchEl.classList.remove('focused')
  searchInput.setAttribute('placeholder', '')
})

const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      //현재 화면이 500px 보다 높으면 배지숨기기

      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      })
      gsap.to(toTopEl, .2, {
        x: 0
      })

    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      })
      gsap.to(toTopEl, .2, {
        x: 100,
      })
    }
  }, 300)
)
//_.throttle(함수, 시간)

toTopEl.addEventListener('click', ()=>{
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.3,
    opacity: 1,
  })
})

//* new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true, //클릭시 사용자가 제어 가능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
})

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
})

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // -1은 무한반복임
    yoyo: true, //true로 하면 한번재생된 애니메이션을 반대로 재생시킴
    ease: Power1.easeInOut,
    delay: random(0, delay),
  })
}

floatingObj('.floating1', 1, 15)
floatingObj('.floating2', 0.5, 10)
floatingObj('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()