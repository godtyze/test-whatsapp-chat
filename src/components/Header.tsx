import { FC } from 'react';

import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import routes from 'router/routes';
import 'styles/components/Header.css';

const Header: FC = () => {
  return (
    <Layout.Header className="header">
      <h1>
        <Link to={routes.main}>Whatsapp chat</Link>
      </h1>
    </Layout.Header>
  );
};

export default Header;
