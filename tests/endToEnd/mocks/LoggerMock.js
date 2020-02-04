const logger = {
    info: () => {},
    warn: () => {},
    error: () => {},
    middleware: (req, res, next) => {
        req.log = logger;
        next();
    }
};
  
module.exports = logger;
