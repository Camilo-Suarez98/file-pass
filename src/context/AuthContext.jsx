import { createContext, useCallback, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [tokenId, setTokenId] = useState(localStorage.getItem('authToken'));

  const login = useCallback(async (email, password) => {
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password
      });
      const { token } = res.data;
      localStorage.setItem('authToken', token);
      setTokenId(token);
    } catch (error) {
      throw new Error(`Ha ocurrido un error: ${error}`);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    setTokenId(null);
  }, []);

  return (
    <AuthContext.Provider value={{ tokenId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth solo funciona dentro de AuthProvider');
  };

  return context;
};
