// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
  if (err.isServer) {
    // if (err.name === 'ValidationError') {
    //   const errorPayload = {
    //     statusCode: 400,
    //     error: 'Validation Error',
    //     messages: err.errors && Object.values(err.errors).map(error => error.message),
    //     // ...err
    //   };
    //   return res.status(400).json(errorPayload);
    // }
    console.log(err);
    return res.sendStatus(err.output.statusCode);
  }
  return res.status(err.output.statusCode).json(err.output.payload);
};
