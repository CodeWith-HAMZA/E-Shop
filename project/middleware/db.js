const { connect, connections } = require("mongoose");

const connectToDB = (handler) => {
  return async (req, res) => {
    try {
      // * If mongoose-connection is already connected then, return the handler-function
      if (connections[0].readyState) {
        console.log("Already connected to DB");

        // * return the handler-function that is comming through the argument
        return handler(req, res);
      } else {
        // * but if the mongoose is not connected? then connect the mongoose through Mongo-URI-String
        await connect(`${process.env.NEXT_PUBLIC_MONGO_URI}`); // * An environment variable
        console.log("------- Successfully Connected To DB :) -------");

        // * After connecting, return the handler-function
        return handler(req, res);
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export default connectToDB;
