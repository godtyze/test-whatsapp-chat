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

export interface ReadChatRequest extends RequestParams {
  chatId: string;
  idMessage?: string;
}

export interface ReadChatResponse {
  setRead: boolean;
}

export interface MessageFromHistory {
  type: MessageFromHistoryType;
  textMessage: string;
  timestamp: number;
  idMessage: string;
  typeMessage: TypeMessage;
  chatId: string;
  statusMessage?: StatusMessage;
  senderId?: string;
  senderName?: string;
  extendedTextMessage?: ExtendedTextMessage;
  contact?: string;
  location?: string;
  caption?: string;
  downloadUrl?: string;
}

export type MessageFromHistoryType = 'incoming' | 'outgoing';

export interface ExtendedTextMessage {
  text: string;
  description: string;
  title: string;
  previewType: string;
  jpegThumbnail: string;
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

export type StatusMessage = 'pending' | 'sent' | 'delivered' | 'read';

export interface TextMessageData {
  textMessage: string;
}

export interface ApiErrorResponse {
  status: number | string;
  data: unknown;
}
