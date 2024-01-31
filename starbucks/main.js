const searchEl = document.querySelector('.search')
const searchInput = searchEl.querySelector('input')

searchEl.addEventListener('click', () =>{
    searchInput.focus();
})

searchInput.addEventListener('focus', () =>{
    searchEl.classList.add('focused')
    searchInput.setAttribute('placeholder', '통합검색');
})

searchInput.addEventListener('blur', () =>{
    searchEl.classList.remove('focused')
    searchInput.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle( ()=>{
    if(window.scrollY > 500){ //현재 화면이 500px 보다 높으면 배지숨기기

        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
},300))
//_.throttle(함수, 시간)