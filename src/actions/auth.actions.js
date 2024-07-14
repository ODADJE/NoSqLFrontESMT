import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const login = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/sign-in`, user);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem(
        'user-info',
        JSON.stringify(response.data.data.user)
      );
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user-info');
  return true;
};
