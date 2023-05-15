import { createBrowserRouter, Navigate } from 'react-router-dom';

import BaseLayout from 'components/BaseLayout';
import RequireAuth from 'components/RequireAuth';
import ChatPage from 'pages/ChatPage';
import MainPage from 'pages/MainPage';
import NotFound from 'pages/NotFound';
import routes from 'router/routes';

export const routesConfig = [
  {
    path: routes.main,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: routes.chat,
            element: <ChatPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={routes.notFound} />,
      },
      {
        path: routes.notFound,
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig, {
  basename: '/test-whatsapp-chat/',
});

export default router;
