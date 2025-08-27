const logger = (req, res, next) => {
  const ts = new Date().toISOString();
  const url = req.originalUrl || req.url;
  console.log(`[${ts}] ${req.method} ${url}`);  next();
};
module.exports = { logger };