import { baseAPI } from 'services/ApiService';
import {
  GetChatHistoryRequest,
  GetChatHistoryResponse,
  GetMessageNotificationResponse,
  RequestParams,
  SendMessageRequest,
  SendMessageResponse,
} from 'types';

export const chatEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChatHistory: builder.mutation<GetChatHistoryResponse, GetChatHistoryRequest>({
      query: ({ idInstance, apiTokenInstance, chatId, count }) => ({
        url: `waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        method: 'POST',
        body: { chatId, count },
      }),
    }),
    getMessagesNotification: builder.query<GetMessageNotificationResponse, RequestParams>({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
      }),
    }),
    sendMessage: builder.mutation<SendMessageResponse, SendMessageRequest>({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetChatHistoryMutation,
  useSendMessageMutation,
  useGetMessagesNotificationQuery,
} = chatEndpoints;
