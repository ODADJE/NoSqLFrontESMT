import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import ProtectRoute from './components/ProtectRoute';
import FeedbackProvider from './contexts/FeedbackContext';
import ThemeProvider from './contexts/ThemeProvider';
import Login from './pages/Auth/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import User from './pages/User/User';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/dashboard',
      element: (
        <ProtectRoute>
          <Dashboard />
        </ProtectRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'users',
          element: <User />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <Toaster position="bottom-right" richColors />
      <FeedbackProvider>
        <RouterProvider router={router} />
      </FeedbackProvider>
    </ThemeProvider>
  );
}

export default App;
