import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/App.scss';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { ConfirmCode } from './pages/ConfirmAccount';
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import QRCodeWebcame from './pages/QRCodeWebcam';
import { ContactUs } from './pages/ContactUs';
import { Stock } from "./pages/Stock";
import { Update } from "./pages/Update";
import { RegisterProduct } from './pages/RegisterProduct';
import { Delete } from './pages/Delete';
import { Notifications } from "./pages/Notifications";
import { Home } from "./pages/Home/Home";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authUserAccount" element={<ConfirmCode />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/notificacoes" element={<Notifications />} />
          <Route path="/dashboard/vender" element={<QRCodeWebcame />} />
          <Route path="/dashboard/registrar" element={<RegisterProduct />} />
          <Route path="/dashboard/estoque" element={<Stock />} />
          <Route path="/dashboard/atualizar" element={<Update />} />
          <Route path="/dashboard/deletar" element={<Delete />} />
          <Route path="/dashboard/fale-conosco" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
