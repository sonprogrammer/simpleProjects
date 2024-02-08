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