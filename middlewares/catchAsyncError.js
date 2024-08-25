// this middleware handle async error

// ye apne parameter me login & other fun ko accept karega
export const catchAsyncErrors = (theFunction) => {
    return (req, res, next) => {
      Promise.resolve(theFunction(req, res, next)).catch(next);
    };
  };