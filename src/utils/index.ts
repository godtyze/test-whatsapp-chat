import { ApiErrorResponse } from 'types';

export const convertNumber = (prefix: string, number: number): string => {
  return prefix + number + '@c.us';
};

export const getNumber = (sender: string) => sender.slice(0, sender.indexOf('@'));

export const isApiError = (error: unknown): error is ApiErrorResponse => {
  return (
    typeof error === 'object' &&
    error !== null &&
    ('data' in error || 'error' in error) &&
    'status' in error
  );
};

export const getErrorMessage = (error: unknown): string | null => {
  let errorMessage = '';
  if (!error || !isApiError(error)) {
    return null;
  }

  switch (error.status) {
    case 466:
      errorMessage = 'Исчерпано кол-во использований метода, попробуйте пересоздать instance.';
      break;

    case 429:
      errorMessage = 'Слишком много запросов';
      break;

    case 'FETCH_ERROR':
      errorMessage = 'Проверьте правильность введенных данных';
      break;

    default:
      errorMessage = 'Что-то пошло не так, попробуйте еще раз.';
  }

  return errorMessage;
};
