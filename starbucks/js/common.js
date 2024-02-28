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


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()