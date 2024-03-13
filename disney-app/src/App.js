import './App.css';
import Nav  from './components/Nav'
import Banner from './components/Banner';
import {Container} from './App-styles';


function App() {
  return (
    <Container>
      <Nav />
      <Banner />
    </Container>
  );
}

export default App;
