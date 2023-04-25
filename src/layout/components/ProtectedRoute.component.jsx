// ProtectedRoute.js
import SignIn from 'pages/sign-in/SignIn.page';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { setAuthToken } from 'store/Slices/authSlice';

export const ProtectedRoute = () => {
    const dispatch = useDispatch();

  let t = sessionStorage.getItem("token");
  t && dispatch(setAuthToken(t));

  if (!t) {
    return<Navigate to="/sign-in" />
  }
  return <Outlet />;
};
