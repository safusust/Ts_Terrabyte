import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
const AuthContext = React.createContext(null);

const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (next) => {
      if (next) {
        setUser(next);
      } else {
        setUser(null);
      }
    });
  }, []);
  return { user, setUser };
};

const AuthProvider = ({ children }) => {
  const { user, setUser } = useAuth();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthContext };
export default AuthProvider;
