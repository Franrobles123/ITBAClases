const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pasar al siguiente middleware o ruta
};
module.exports = { loggerMiddleware };