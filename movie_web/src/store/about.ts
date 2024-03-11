import { Store } from "../core/heropy";


interface State{
    photo: string
    name: string
    email: string
    github: string
    repository: string
}

export default new Store<State>({
    photo: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140111_39%2Fconselot_13894439521335n6j2_JPEG%2Fimg13.jpg&type=sc960_832',
    name: 'youngin son',
    email: 'ods04138@gmail.com',
    github: 'https://github.com/sonprogrammer',
    repository: 'https://github.com/sonprogrammer/simpleProjects/tree/main/movie_web'
})