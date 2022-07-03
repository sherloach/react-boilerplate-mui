import axios from 'axios';

// actions
import { setLoading } from 'App/App.actions';

const requestConfig = {
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  timeout: 5000,
  showSpinner: false,
};

export const axiosInstance = axios.create(requestConfig);

export default function initRequest(store) {
  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;

    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }

  axiosInstance.interceptors.request.use(
    (config) => {
      // show loading
      if (config.showSpinner) {
        requestCount += 1;
        store.dispatch(setLoading(true));
      }

      return config;
    },
    (error) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      if (res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    (error) => {
      if ((error && error.config.showSpinner) || error.code === 'ECONNABORTED') {
        decreaseRequestCount();
      }

      // handle request timeout
      if (error.code === 'ECONNABORTED') {
        store.dispatch(setLoading(false));
      }

      // handle errors
      switch (error.response?.status) {
        case 400: {
          break;
        }
        case 500: {
          break;
        }
        default:
          break;
      }
      return Promise.reject(error);
    },
  );
}
