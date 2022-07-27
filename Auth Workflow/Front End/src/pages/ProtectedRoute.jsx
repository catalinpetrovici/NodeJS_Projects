import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext();
  return user ? children : <Navigate to='/'></Navigate>;
};
export default PrivateRoute;
