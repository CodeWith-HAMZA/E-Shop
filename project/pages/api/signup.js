import connectToDB from "../../middleware/db";
import User from "../../models/User";
import bcryptJS from "bcryptjs";
import JWT from "jsonwebtoken";
const handler = async (req, res) => {
  if (req.method != "POST")
    return res.status(400).send({ error: "bad request" });

  const { name, email, password } = req.body;

  

  try {
    if (await User.findOne({ email })) {
      // console.log("user fonud");
      return res.status(404).send({
        success: false,
        status: "Error!",
        message: "Account Already Exists",
      });
    } // const users = await User.find({});


    const hashedPassword = await bcryptJS.hash(
      password,
      await bcryptJS.genSalt(10)
    );

    // * Creating The Document In The Data-Base
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    

    // * Generating JWT-Token For The Registered or Logged-In User
    const token = JWT.sign({ foo: "heuthaoe" }, "JWTSecret", {
      expiresIn: "2d",
    });

    // const token = await JWT.sign(
    //   payload,
    //   "secret",
    //   { expiresIn: "2d" }
    // );
    return res.status(200).send({
      success: true,
      status: "Success!",
      message: "You're Successfully Sign Up",
      token,
    });
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
