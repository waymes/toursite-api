// eslint-disable-next-line no-unused-vars
export default (error, req, res, next) => {
  if (error.isServer) {
    console.log(error);
  }
  return res.status(error.output.statusCode).json(error.output.payload);
};
