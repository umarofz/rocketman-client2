import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Mahsulotar from './pages/Mahsulotlar/Mahsulotlar';
import Buyurtmalar from './pages/Buyurtmalar/Buyurtmalar';
import Mijozlar from './pages/Mijozlar/Mijozlar';
import Takliflar from './pages/Takliflar/Takliflar';
import Sozlamalar from './pages/Sozlamalar/Sozlamalar';

function App() {
  return (
    <div className={`app `}>
      <div className="layout">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buyurtmalar" element={<Buyurtmalar/>}/>
          <Route path="/mahsulotlar" element={<Mahsulotar/>}/>
          <Route path="/mijozlar" element={<Mijozlar/>}/>
          <Route path="/takliflar" element={<Takliflar/>}/>
          <Route path="/sozlamalar" element={<Sozlamalar/>}/>
          <Route path="/mahsulotlar" element={<Mahsulotar/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
