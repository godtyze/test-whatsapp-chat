import { baseAPI } from 'services/ApiService';
import {
  GetChatHistoryRequest,
  GetChatHistoryResponse,
  GetMessageNotificationResponse,
  ReadChatRequest,
  ReadChatResponse,
  RequestParams,
  SendMessageRequest,
  SendMessageResponse,
} from 'types';

export const chatEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChatHistory: builder.query<GetChatHistoryResponse, GetChatHistoryRequest>({
      query: ({ idInstance, apiTokenInstance, chatId, count }) => ({
        url: `waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`,
        method: 'POST',
        body: { chatId, count },
      }),
      transformResponse: (res: GetChatHistoryResponse) => res.reverse(),
      providesTags: () => ['Message'],
    }),
    readChat: builder.query<ReadChatResponse, ReadChatRequest>({
      query: ({ idInstance, apiTokenInstance, chatId, idMessage }) => ({
        url: `waInstance${idInstance}/ReadChat/${apiTokenInstance}`,
        method: 'POST',
        body: { chatId, idMessage },
      }),
    }),
    getMessagesNotification: builder.query<GetMessageNotificationResponse | null, RequestParams>({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
      }),
    }),
    sendMessage: builder.mutation<SendMessageResponse, SendMessageRequest>({
      query: ({ idInstance, apiTokenInstance, body }) => ({
        url: `waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Message'],
    }),
  }),
});

export const {
  useGetChatHistoryQuery,
  useSendMessageMutation,
  useGetMessagesNotificationQuery,
  useReadChatQuery,
} = chatEndpoints;
