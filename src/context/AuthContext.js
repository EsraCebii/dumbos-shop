import { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext();

const defaultLoggedIn = localStorage.getItem('loggedIn') || false;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(defaultLoggedIn);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const logindata = JSON.parse(localStorage.getItem("logindata"));

        if (logindata !== null) {
          setLoggedIn(true);
          setUser(logindata);
        }

        setLoading(false);
      } catch (e) {
        console.log("useeffect", e);
        setLoading(false);
      }
    })();
  }, []);

  const login = (values) => {
    console.log("login values", values);
    setLoggedIn(true);
    setUser(values);
    localStorage.setItem('loggedIn', true)
    localStorage.setItem("logindata", JSON.stringify(values));
  };



  const logout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('logindata');
    setLoggedIn(false);
  }

  const values = {
    loggedIn,
    login,
    logout,
    user,
    loading
  };


  return <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>
}


const useAuth = () => useContext(AuthContext);

export {
  AuthProvider,
  useAuth
}
