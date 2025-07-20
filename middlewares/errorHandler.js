const errorHandler = (err, req, res, next) => {
  console.error(err); // Log the full error for debugging

  // Set default status code and message
  const statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Handle common mongoose validation error
  if (err.name === 'ValidationError') {
    // Aggregate all validation error messages into one string
    message = Object.values(err.errors)
      .map(val => val.message)
      .join(', ');
  }

  res.status(statusCode).json({
    error: message,
    // Optionally include stack trace in development
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
