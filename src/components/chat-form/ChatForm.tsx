import { FC } from 'react';

import { Button, Card, Form, Input, Typography } from 'antd';

import Message from 'components/chat-form/Message';
import { useAppSelector } from 'hooks/redux';
import { useSendMessageMutation } from 'services/ChatEndpoints';
import { selectCredentials } from 'store/slices/userSlice';
import 'styles/components/ChatForm.css';
import { GetChatHistoryResponse } from 'types';
import { getNumber } from 'utils';

interface ChatFormProps {
  messages?: GetChatHistoryResponse;
}

interface FormValues {
  message: string;
}

const ChatForm: FC<ChatFormProps> = ({ messages }) => {
  const [form] = Form.useForm<FormValues>();
  const {
    receiverNumber: chatId,
    idInstance,
    apiTokenInstance,
  } = useAppSelector(selectCredentials);
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const onSendMessage = async (values: FormValues) => {
    const { message } = values;
    const body = { idInstance, apiTokenInstance, body: { chatId, message } };

    await sendMessage(body);
    form.setFieldValue('message', '');
  };

  return (
    <div className="chat-form-wrapper">
      <Typography.Title level={3}>Чат с +{getNumber(chatId)}</Typography.Title>
      <Card className="card">
        {messages?.map((message) => {
          return (
            <Message
              key={message.idMessage}
              type={message.type}
              textMessage={message.extendedTextMessage?.text || message.textMessage}
              senderName={message.senderName || 'Вы'}
            />
          );
        })}
      </Card>
      <Form name="chat-form" onFinish={onSendMessage} form={form}>
        <Form.Item
          name="message"
          rules={[{ required: true, message: 'Сообщение не может быть пустым!' }]}
          hasFeedback
        >
          <Input.TextArea maxLength={300} showCount={true} placeholder="Введите сообщение.." />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={isLoading}
          >
            Отправить сообщение
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChatForm;
