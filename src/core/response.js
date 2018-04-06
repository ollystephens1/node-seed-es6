// const CODES = {
//   success: {
//     200: 'Succeeded',
//     201: 'Created',
//     202: 'Updated',
//     default: 'OK'
//   },
//   error: {
//     400: 'Bad Request',
//     401: 'Unauthorized',
//     403: 'Forbidden',
//     404: 'Not Found',
//     405: 'Method Not Allowed',
//     500: 'Internal Server Error',
//     default: 'Bad request'
//   }
// };

export const resSuccess = res => (data, { message = '', status = true, code = 200 } = {}) => {
  return res.status(code).send({ 
    status,
    message, 
    data
  });
};

export const resError = res => (err, { message = '', status = false, code = 400 } = {}) => {
  message = message || err.message;

  return res.status(code).send({
    status,
    message,
    code
  });
};
