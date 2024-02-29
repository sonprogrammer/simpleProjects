import { Component } from "../core/heropy";

export default class TheFooter extends Component {
    constructor(){
        super({
            tagName: 'footer'
        })
    }

    render(){
        this.el.innerHTML = /*html */`
            <div>
                <a href="https://github.com/sonprogrammer/simpleProjects/tree/main/movie_web">GitHub Repository</a>
            </div>
            <div>
                <a href="https://github.com/sonprogrammer/">
                    ${new Date().getFullYear()} youngjin son
                </a>
            </div>
        `
    }
}