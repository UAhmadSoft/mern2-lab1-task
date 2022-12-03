import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import TodoApp from './components/TodoApp';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
