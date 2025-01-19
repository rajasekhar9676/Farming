const jwt = require('jsonwebtoken');

// Middleware to authenticate user
const authMiddleware = (req, res, next) => {
    try {
      const token = req.header('Authorization')?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'No token provided. Access denied.' });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach user data to the request object
      next();
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return res.status(401).json({ error: 'Invalid or expired token.' });
    }
  };


 

  const authBuyerMiddleware = (req, res, next) => {
    try {
      const token = req.header('Authorization')?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'No token provided. Access denied.' });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.buyer = decoded; // Attach buyer data (id, email, etc.) to the request object
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid or expired token.' });
    }
  };
  
  
  
  
  
module.exports = {authMiddleware,authBuyerMiddleware}
