import React, { useEffect } from 'react';
import LoginForm from '../../../components/LoginForm';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('token') !== 'undefined'
    ) {
      navigate('/dashboard');
    }
  }, [navigate]);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoginForm />
    </div>
  );
}

export default Login;
