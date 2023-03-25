import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Mahsulotar from './pages/Mahsulotlar/Mahsulotlar';

function App() {
  return (
    <div className={`app `}>
      <div className="layout">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/mahsulotlar" element={<Mahsulotar/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
