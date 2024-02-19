import ipads from '../data/ipads.js';
import navigations from '../data/navigations.js';




//* 장바구니
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');


basketStarterEl.addEventListener('click', (e)=>{
    e.stopPropagation();// 이벤트 버블링을 없앰
    if(basketEl.classList.contains('show')){ // contains result false or true
        //hide
        hideBasket();
    }else{
        //show
        showBasket();
    }
})

basketEl.addEventListener('click', function(e) {
    e.stopPropagation();
})

window.addEventListener('click', ()=>{
    hideBasket();
})

function showBasket(){
    basketEl.classList.add('show')
}
function hideBasket(){
    basketEl.classList.remove('show')
}


// *검색
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]; //전개연산자(...)을 통해 queryseledctoall을 해체한다
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = headerEl.querySelector('.search-closer');
const searchShadowEl = headerEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

searchStarterEl.addEventListener('click', ()=>{
    showSearch()
})
searchCloserEl.addEventListener('click', ()=>{
    hideSearch();
})
searchShadowEl.addEventListener('click', ()=>{
    hideSearch()
})



function showSearch(){
    headerEl.classList.add('searching')
    document.documentElement.classList.add('fixed')
    headerMenuEls.reverse().forEach((el, index)=>{
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
    })
    searchDelayEls.forEach((el, index)=>{
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    setTimeout(() => {
        searchInputEl.focus()
    }, 600);
}

function hideSearch(){
    headerEl.classList.remove('searching')
    document.documentElement.classList.remove('fixed')
    headerMenuEls.forEach((el, index)=>{
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
    })
    searchDelayEls.reverse().forEach((el, index)=>{
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    searchDelayEls.reverse();
    searchInputEl.value = ''
}


// *요소의 가시성 관찰
const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting){
            return
        }
        entry.target.classList.add('show')
    })
});


const infoEls = document.querySelectorAll('.info');
infoEls.forEach((el)=>{
    io.observe(el)
})


// ! 비디오 재생
const video = document.querySelector('.stage video');
const playBtn = document.querySelector('.stage .controller--play');
const pauseBtn = document.querySelector('.stage .controller--pause');

playBtn.addEventListener('click', () =>{
    video.play()
    playBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
})
pauseBtn.addEventListener('click', () =>{
    video.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');
})




// !ipad 렌더링
const itemsEl = document.querySelector('section.compare .items')
ipads.forEach((ipad)=>{
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    let colorList = ''
    ipad.colors.forEach((color)=>{
        colorList += `<li style="background-color: ${color};"></li>`
    })
    
    itemEl.innerHTML =  /* html */ `
    <div class="thumbnail">
        <img src="${ipad.thumbnail}" alt="${ipad.name}" />
    </div>
    <ul class="colors">
        ${colorList}
    </ul>
    <h3 class="name">${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>
    <p class="price"> ￦${ipad.price.toLocaleString('en-us')}부터</p>
    <button class="btn">구입하기</button>
    <a href="${ipad.url}" class="link">더 알아보기</a>
    `

    itemsEl.append(itemEl)
})


const navigationsEl = document.querySelector('footer .navigations')

navigations.forEach((nav)=>{
    const mapEl = document.createElement('div')
    mapEl.classList.add('map')

    let mapList = ''
    nav.maps.forEach((map)=>{
        mapList += /*html*/ `<li>
        <a href="${map.url}">${map.name}</a>
        </li>`
    })
    
    mapEl.innerHTML = /*html*/ `
        <h3>
            <span class="text">${nav.title}</span>
        </h3>
        <ul>
            ${mapList}
        </ul>
    `
    navigationsEl.append(mapEl)
})


const thisYearEl = document.querySelector('span.this-year')
thisYearEl.textContent = new Date().getFullYear()