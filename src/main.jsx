import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from './components/about/About';
import MainLayout from './components/mainLayout/MainLayout';
import Home from './components/home/Home';
import Error from './components/error/Error';
import AuthLayout from './components/auth/authLayout';
import Login from './components/auth/Login';
import AddVisa from './components/addVisa/AddVisa';
import AllVisas from './components/allvisas/AllVisas';
import Register from './components/auth/Register';
import MyLayout from './components/my/MyLayout';
import AddedVisas from './components/my/mychilds/AddedVisas';
import AppliedVisas from './components/my/mychilds/AppliedVisas';

// import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="add-visa" element={<AddVisa />} />
          <Route path="all-visas" element={<AllVisas />} />
          <Route path="about" element={<About />} />
          <Route path="my" element={<MyLayout />}>
            <Route path="added-visas" element={<AddedVisas />} />
            <Route path="applied-visas" element={<AppliedVisas />} />
          </Route>
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
