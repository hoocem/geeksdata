import React, { useContext } from 'react';
import { AuthContext } from "../../contexts/auth/authContext"
import Header from "./header/Header";
import Footer from "./footer/Footer";

const AppLayout = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  return (
    <>
      {isAuthenticated && <Header />}
      {children}
      {isAuthenticated && <Footer />}
    </>
  );
};

export default AppLayout;
