const loggerMiddleware = (res, req, next) =>{
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`)
  next();
};
module.exports = {loggerMiddleware};
const loggerMiddleware1 = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pasar al siguiente middleware o ruta
};

module.exports = { loggerMiddleware };
