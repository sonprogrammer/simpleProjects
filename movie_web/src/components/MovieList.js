import { Component } from "../core/heropy";
import moiveStore from "../store/movie"

export default class MovieList extends Component {
    constructor(){
        super()
        moiveStore.subscribe('movies', ()=>{
            this.render()
        })
    }
    render() {
        this.el.classList.add("movie-list")
        this.el.innerHTML = /* html */`
            <div class="movies"></div>
        `

        const moivesEl = this.el.querySelector('.movies')
        moivesEl.append(
            moiveStore.state.movies.map( movie => {
                return movie.Title
            })
        )
    }
}