const CODES = {
  success: {
    200: '200 - Succeeded',
    201: '201 - Created',
    202: '202 - Updated',
    default: 'OK'
  },
  error: {
    400: '400 - Bad Request',
    401: '401 - Unauthorized',
    403: '403 - Forbidden',
    404: '404 - Not Found',
    405: '405 - Method Not Allowed',
    500: '500 - Internal Server Error',
    default: 'Bad request'
  }
};

const setStatusCode = (success, code) => {
  return success ? code || 200 : code || 500;
};

const setDefaultMessage = (success, code) => {
  const codes = success ? CODES.success : CODES.error;
  return codes[code] || codes.default;
};

export default (res, err) => {
  let success = true;

  if (!res) {
    throw new Error('Missing res object');
  }

  return (data, { code, message } = {}) => {
    if (err) {
      success = false;
    }

    const statusCode = setStatusCode(success, code);

    res.status(statusCode).send({
      status: statusCode,
      message: message || setDefaultMessage(success, code),
      data
    });
  };
};
