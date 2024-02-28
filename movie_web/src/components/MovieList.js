import { Component } from "../core/heropy";
import moiveStore from "../store/movie"
import MovieItem from "./MovieItem";

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
            ...moiveStore.state.movies.map( movie => {
                return new MovieItem({
                    movie: movie 
                }).el
            })
        )
    }
}