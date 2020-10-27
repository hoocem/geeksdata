import React, { useReducer } from 'react';
import { AuthContext } from './authContext';

const isBrowser = typeof window !== 'undefined';
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token')
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {isAuthenticated: true};
    case 'LOGOUT':
      return {isAuthenticated: false};
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
