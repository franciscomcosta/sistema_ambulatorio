import './App.css';
import Menu from './components/Menu';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
       <Menu />
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='home' element={<Home />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
