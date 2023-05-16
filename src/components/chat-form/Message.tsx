import { FC } from 'react';

import { MessageFromHistoryType } from 'types';

interface MessageProps {
  type: MessageFromHistoryType;
  textMessage: string;
  senderName: string;
}

const Message: FC<MessageProps> = ({ textMessage, type, senderName }) => {
  return (
    <div style={{ alignSelf: type === 'incoming' ? 'flex-start' : 'flex-end' }}>
      <h4>{senderName}</h4>
      <p>{textMessage}</p>
    </div>
  );
};

export default Message;
