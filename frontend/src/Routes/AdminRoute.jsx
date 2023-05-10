import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const AdminRoute = ({children}) => {
  const {isAuth}=useSelector(store=>store.AuthReducer);
  const role = localStorage.getItem('userrole');
  const location=useLocation();

  return isAuth && !role?.includes('user')?children:<Navigate to='/login' state={location.pathname} replace/>;
}