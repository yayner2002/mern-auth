// used as catch all that does not have controller for all routes
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error); // call the next piece of middleware and pass in the error
};

// if you pass err as  a first argument, express will recognize it as a custome error middleware
// used as catch all errors that occur in our routes and controllers using throw new Error("Invalid email or password");
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message; 


  // special type of error that mongoose throws when it cannot find a resource html looking 
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

export { notFound, errorHandler };
