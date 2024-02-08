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
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = headerEl.querySelector('.search-closer');
const searchShadowEl = headerEl.querySelector('.shadow');

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
}

function hideSearch(){
    headerEl.classList.remove('searching')
    document.documentElement.classList.remove('fixed')
}