import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem('token') === null ||
      localStorage.getItem('token') === 'undefined'
    ) {
      navigate('/');
    }
  }, [navigate]);
  return children;
}

export default ProtectRoute;
