import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandlingPage from './components/ladingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminHome from './components/adminHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandlingPage/>} />
          <Route path='/admin-login' element={<AdminLogin/>} />
          <Route path='/user-login' element={<UserLogin/>} />
          <Route path='/admin/*' element={<AdminHome/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
