import { FC } from 'react';

import { Layout, notification, Spin } from 'antd';

import ChatForm from 'components/chat-form/ChatForm';
import { useAppSelector } from 'hooks/redux';
import { useGetChatHistoryQuery, useReadChatQuery } from 'services/ChatEndpoints';
import { selectCredentials } from 'store/slices/userSlice';
import { getErrorMessage } from 'utils';

const ChatPage: FC = () => {
  const {
    receiverNumber: chatId,
    idInstance,
    apiTokenInstance,
  } = useAppSelector(selectCredentials);
  const { data, isLoading, error } = useGetChatHistoryQuery(
    { chatId, idInstance, apiTokenInstance },
    {
      pollingInterval: 5000,
    }
  );

  useReadChatQuery(
    { chatId, idInstance, apiTokenInstance },
    {
      pollingInterval: 7000,
    }
  );

  if (error) {
    notification.error({
      message: 'Произошла ошибка!',
      description: getErrorMessage(error),
    });
  }

  if (isLoading || !data) {
    return (
      <Layout>
        <Layout.Content className="main-page">
          <Spin size="large" />
        </Layout.Content>
      </Layout>
    );
  }

  return (
    <Layout>
      <Layout.Content className="main-page">
        <ChatForm messages={data} />
      </Layout.Content>
    </Layout>
  );
};

export default ChatPage;
