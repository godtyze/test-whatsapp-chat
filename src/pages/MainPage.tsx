import { FC } from 'react';

import { Button, Layout, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import AuthForm from 'components/AuthForm';
import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/useActions';
import routes from 'router/routes';
import { selectAuth } from 'store/slices/userSlice';
import 'styles/pages/MainPage.css';

const MainPage: FC = () => {
  const { setAuth } = useActions();
  const isAuth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  const onClickBack = () => navigate(routes.chat);
  const onClickChange = () => setAuth(false);

  if (isAuth) {
    return (
      <Layout>
        <Layout.Content className="main-page">
          <Space>
            <Button size="large" onClick={onClickBack}>
              Вернуться на страницу чата
            </Button>
            <Button size="large" onClick={onClickChange}>
              Изменить данные
            </Button>
          </Space>
        </Layout.Content>
      </Layout>
    );
  }

  return (
    <Layout>
      <Layout.Content className="main-page">
        <AuthForm />
      </Layout.Content>
    </Layout>
  );
};

export default MainPage;
