import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from '../mainLayout/MainLayout';
import Home from '../home/Home';
import AddVisa from '../addVisa/AddVisa';
import AllVisas from '../allvisas/AllVisas';
import MyLayout from '../my/MyLayout';
import AddedVisas from '../my/mychilds/AddedVisas';
import AppliedVisas from '../my/mychilds/AppliedVisas';
import AuthLayout from '../auth/AuthLayout';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Error from '../error/Error';
import MyActs from '../my/mychilds/MyActs';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="add-visa" element={<AddVisa />} />
          <Route path="all-visas" element={<AllVisas />} />
          <Route path="my" element={<MyLayout />}>
            <Route index element={<MyActs />} />
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
  );
}

export default AppRoutes;
