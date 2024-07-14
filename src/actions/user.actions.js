import axios from 'axios';
import { getTokenFromLocalStorage } from '../utils/token';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    });
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, data, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    });
    if (response.status === 201) {
      return response.data.data;
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateUser = async (data, id) => {
  try {
    const response = await axios.patch(`${BASE_URL}/users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    });
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    });
    return true;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
