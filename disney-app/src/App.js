import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import SearchPage from './pages/SearchPage/SearchPage';


const Layout = () =>{
  return(
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
      <Route path='/' element={<Layout />}>
  <Route index element={<LoginPage />} />
  <Route path='main' element={<MainPage />} />
  <Route path=':movieId' element={<DetailPage />} />
  <Route path='search' element={<SearchPage />} />
</Route>
      </Routes>
    </div>
  );
}

export default App;
