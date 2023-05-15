export interface RequestParams {
  idInstance: string;
  apiTokenInstance: string;
}

export interface SendMessageResponse {
  idMessage: string;
}

export interface SendMessageRequest extends RequestParams {
  body: SendMessageBody;
}

export interface SendMessageBody {
  chatId: string;
  message: string;
  quotedMessageId?: string;
  archiveChat?: boolean;
  linkPreview?: boolean;
}

export interface MessageFromHistory {
  type: 'incoming' | 'outgoing';
  timestamp: number;
  idMessage: string;
  typeMessage: TypeMessage;
  chatId: string;
  senderId: string;
  senderName: string;
  textMessage: string;
}

export type GetChatHistoryResponse = MessageFromHistory[];
export interface GetChatHistoryRequest extends RequestParams {
  chatId: string;
  count?: number;
}

export interface GetMessageNotificationResponse {
  receiptId: number;
  body: GetMessageBody;
}

export interface GetMessageBody {
  typeWebhook: string;
  instanceData: InstanceData;
  timestamp: number;
  idMessage: string;
  senderData: SenderData;
  messageData: MessageData;
}

export interface InstanceData {
  idInstance: number;
  wid: string;
  typeInstance: string;
}

export interface SenderData {
  chatId: string;
  sender: string;
  senderName: string;
}

export interface MessageData {
  typeMessage: TypeMessage;
  textMessageData: TextMessageData;
}

export type TypeMessage =
  | 'textMessage'
  | 'imageMessage'
  | 'videoMessage'
  | 'documentMessage'
  | 'audioMessage'
  | 'locationMessage'
  | 'contactMessage'
  | 'extendedMessage';

export interface TextMessageData {
  textMessage: string;
}
