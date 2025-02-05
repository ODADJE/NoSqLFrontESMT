export const getTokenFromLocalStorage = () => localStorage.getItem('token');

export const removeTokenFromLocalStorage = () =>
  localStorage.removeItem('token');

export const setTokenToLocalStorage = (token) =>
  localStorage.setItem('token', token);
