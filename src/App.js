import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './container/header/header';
import Sidebar from './container/sidebar/sidebar';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className={`app `}>
      <div className="layout">
        <Header />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
