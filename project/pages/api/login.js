import connectToDB from "../../middleware/db";
import User from "../../models/User";
import bcryptJS from "bcryptjs";
import JWT from "jsonwebtoken";
const handler = async (req, res) => {
  if (req.method != "POST")
    return res.status(400).send({ error: "bad request" });

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); // ? If user not found should move one further or simply return
    if (user) {
      // ? Should I Hash The Password With Bcrypt or Encrypt... Would Enhance It More
      if (await bcryptJS.compare(password, user.password)) {
        const { email, name } = user;

        // * Generating JWT-Token For The Registered Or Logged-In User, Token Works For 2-days, After 2-days this won't work anymore..
        const token = JWT.sign({ name, email }, "JWTSecret", {
          expiresIn: "2d",
        });

        return res.status(200).send({
          success: true,
          status: "Success!",
          message: "Successfully Login",
          token,
        });
      }
      return res.status(404).send({
        success: false,
        status: "Error!",
        message: "Invalid Credentials",
      });
    } else {
      return res.status(404).send({
        success: false,
        status: "Error!",
        message: "Account Doesn't Exists",
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      status: "Error!",
      message: "Internal Server Error",
      error,
    });
  }
};
export default connectToDB(handler);
