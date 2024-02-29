import { Component } from '../core/heropy'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/',
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988',
          },
          {
            name: 'About',
            href: '#/about',
          },
        ],
      },
    })
    window.addEventListener('popstate', ()=>{
        this.render()
    })
  }

  render() {
    this.el.innerHTML = /*html */ `
            <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
            <nav class="">
                <ul>
                    ${this.state.menus
                      .map((menu) => {
                        const href = menu.href.split('?')[0]
                        const hash = location.hash.split('?')[0]
                        const isActive = href === hash
                        return /* html */ `
                            <li>
                                <a class="${isActive ? 'active' : ''}" href="${
                          menu.href
                        }">${menu.name}</a>
                            </li>
                        `
                      })
                      .join('')}
                </ul>
            </nav>

            <a href="#/about" class="user">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140111_39%2Fconselot_13894439521335n6j2_JPEG%2Fimg13.jpg&type=sc960_832" alt="User" />
            </a>
        `
  }
}
