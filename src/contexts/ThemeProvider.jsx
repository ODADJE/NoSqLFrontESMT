import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    );
    setTheme(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
