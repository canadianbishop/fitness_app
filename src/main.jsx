import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, } from 'react-router';
import SignUpPage from './pages/signUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Home from './components/Home.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { TaskProvider } from './contexts/TaskContext.jsx';
import ProtectedRoute from './contexts/ProtectedRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            {/* <Route path="login" element={<SignIn />} /> */}
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  </StrictMode>
);
