import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './home';
import { Choose } from './choose';
import { Dispense } from './dispense';
import { StockHandler } from './stock';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/choose/:id' Component={Choose}/>
        <Route path='/dispense' Component={Dispense} />
        <Route path='/stock' Component={StockHandler} />
        <Route path='/choose/logs/:id' element={<h1>Choose</h1>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
