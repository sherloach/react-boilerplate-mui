import { AppActionTypes } from './App.types';

export const setLoading = (isLoading) => ({
  type: AppActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setDialog = (isShow, type = 'error', content = '') => ({
  type: AppActionTypes.SET_DIALOG,
  payload: {
    dialog: {
      type,
      isShow,
      content,
    },
  },
});

export const enqueueSnackbarAction = (notification) => {
  return {
    type: AppActionTypes.ENQUEUE_SNACKBAR,
    payload: {
      key: notification.key || new Date().getTime() + Math.random(),
      message: notification.message,
      variant: notification.variant || 'success',
    },
  };
};

export const removeSnackbar = (key) => ({
  type: AppActionTypes.REMOVE_SNACKBAR,
  payload: key,
});
