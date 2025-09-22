const loggerMiddleware = (res, req, next) =>{
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`)
  next();
};
module.exports = {loggerMiddleware};