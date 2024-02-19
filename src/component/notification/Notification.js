

const {notification} =require('antd')

notification.config({
  placement: 'topRight',
  duration: 3,
  maxCount: 3,
});

export const showSuccessNotification = (successMessage) => {
  notification.success({
    message: 'Success',
    description: successMessage,
  });
};

export const showErrorNotification = (errorMessage, placement) => {
  notification.error({
    message: 'Error',
    description: errorMessage,
    placement: placement,
  });
};
export const showInfoNotification = (infoMessage, placement) => {
  notification.info({
    message: 'Info',
    description: infoMessage,
    placement: placement,
  });
};
