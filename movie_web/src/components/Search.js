import { Component } from "../core/heropy";

export default class Search extends Component {
    render(){
        this.el.classList.add("search")
        this.el.innerHTML = /*html */`
         <input placeholder="Enter the movie title to search!"/>
         <button class="btn btn-primary">Search</button>
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {

        })
        inputEl.addEventListener('keydown', (e) => {
            if(e.key === 'Enter'){

            }
        })

        const btnEl = this.el.querySelector('button')
        btnEl.addEventListener('click', () => {

        })
    }
}