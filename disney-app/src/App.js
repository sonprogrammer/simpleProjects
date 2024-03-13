import './App.css';
import Nav  from './components/Nav'
import Banner from './components/Banner';
import {Container} from './App-styles';
import Category from './components/Category';


function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
    </Container>
  );
}

export default App;
