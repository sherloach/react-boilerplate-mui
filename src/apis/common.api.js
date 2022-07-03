import httpRequest from 'services/httpRequest';

export const fetchTodo = async (url) => {
  return httpRequest.get(url, {
    showSpinner: true,
  });
};

export const fetchMultiRequest = async (url) => {
  return httpRequest.get(url);
};
