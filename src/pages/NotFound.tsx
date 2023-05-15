import { FC } from 'react';

import { Empty, Layout } from 'antd';

import 'styles/pages/NotFound.css';

const NotFound: FC = () => {
  return (
    <Layout>
      <Layout.Content className="not-found">
        <Empty />
      </Layout.Content>
    </Layout>
  );
};

export default NotFound;
