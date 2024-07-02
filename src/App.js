import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
export const context = createContext()
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/form' element={<Form />} />
        <Route path='/' element={<Home />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
