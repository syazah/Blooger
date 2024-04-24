//THIS CUSTOM ERROR HANDLER IS WHEN WE WANT TO CREATE THE ERROR
export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error; 
};
