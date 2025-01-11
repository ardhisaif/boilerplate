import { ZodError } from 'zod';

const Status = {
  200: 'OK',
  304: 'Not Modified',
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Data Not found',
  409: 'Conflict',
  410: 'Gone',
  422: 'Unprocessable Entity',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  501: 'Bad Gateway',
};

export function response(res, code, message = '', data = null) {
  const status = Status[code] || '';
  res.status(code).json({ status, status_code: code, message, data });
}

export function okResponse(res, message = '', data = null) {
  return response(res, 200, message, data);
}

export function errResponse(error, res, position) {
  if (position) console.log(position, 'error: ', error.message);

  if (error instanceof ZodError) return response(res, 400, error.errors[0].message);

  const status = error.status || 500;
  error.message = status === 500 ? 'Internal Server Error' : error.message;
  return response(res, status, error.message);
}

export function errThrow(condition, status, message) {
  if (condition) {
    const error = new Error(message);
    error.status = status;
    throw error;
  }
}
