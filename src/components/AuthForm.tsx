import { FC } from 'react';

import { Button, Card, Form, Input, InputNumber, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/useActions';
import routes from 'router/routes';
import { selectCredentials } from 'store/slices/userSlice';
import 'styles/components/AuthForm.css';
import { convertNumber } from 'utils';

interface FormValues {
  idInstance: string;
  apiTokenInstance: string;
  receiverNumber: number;
  prefixNumber: string;
}

const prefixSelector = (
  <Form.Item name="prefixNumber" noStyle initialValue="7">
    <Select style={{ width: 70 }}>
      <Select.Option value="7">+7</Select.Option>
    </Select>
  </Form.Item>
);

const AuthForm: FC = () => {
  const { idInstance, apiTokenInstance } = useAppSelector(selectCredentials);
  const { setCredentials, setAuth } = useActions();
  const navigate = useNavigate();

  const onCreateChat = (values: FormValues) => {
    const { prefixNumber, receiverNumber, apiTokenInstance, idInstance } = values;
    const convertedNumber = convertNumber(prefixNumber, receiverNumber);
    const credentials = { idInstance, apiTokenInstance, receiverNumber: convertedNumber };

    setCredentials({ credentials });
    setAuth(true);
    navigate(routes.chat);
  };

  return (
    <Card className="form-card">
      <Form name="auth-form" size="large" onFinish={onCreateChat}>
        <Form.Item
          name="idInstance"
          hasFeedback
          initialValue={idInstance}
          rules={[
            { required: true, message: 'idInstance не может быть пустым!' },
            { whitespace: true, message: 'idInstance не может быть пустым!' },
          ]}
        >
          <Input placeholder="idInstance" autoComplete="off" />
        </Form.Item>
        <Form.Item
          name="apiTokenInstance"
          hasFeedback
          initialValue={apiTokenInstance}
          rules={[
            { required: true, message: 'apiTokenInstance не может быть пустым!' },
            { whitespace: true, message: 'apiTokenInstance не может быть пустым!' },
          ]}
        >
          <Input placeholder="apiTokenInstance" autoComplete="off" />
        </Form.Item>
        <Form.Item
          name="receiverNumber"
          hasFeedback
          rules={[{ required: true, message: 'Номер получателя не может быть пустым!' }]}
        >
          <InputNumber
            controls={false}
            addonBefore={prefixSelector}
            placeholder="Номер получателя"
            autoComplete="off"
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Созать чат
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AuthForm;
