import { FC } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import routes from 'router/routes';
import { selectAuth } from 'store/slices/userSlice';

const RequireAuth: FC = () => {
  const isAuth = useAppSelector(selectAuth);

  if (!isAuth) {
    return <Navigate to={routes.main} />;
  }

  return <Outlet />;
};

export default RequireAuth;
