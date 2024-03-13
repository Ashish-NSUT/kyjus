const User = require("../Models/User");
const sendMail = require("../utils/NodeMailer");
const bcrypt = require("bcrypt");

//reset Passowrd Link

exports.resetLink = async (req, res) => {
  try {
    const { email } = req.body;

    if(!email) {
      return res.status(401).send({
          success: false,
          message: "No Email found",
      });
  }

    const user = await User.findOne({ email:email });

    if (!user) {
      return res.status(401).send({
        success: false,
        message: "User doee not Exist",
      });
    }

    // create token for url
    const token = crypto.randomUUID();

    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      { token: token, TokenExpiry: Date.now() + 3600000 },
      { new: true }
    );

    console.log(updatedDetails);

    const url = `http://localhost:3000/update-password/${token}`;

    await sendMail(email, `Reset Password here: ${url}`, "Reset Password");

    return res.status(200).send({
      success: true,
      message: "Password reset successfully",
      token
    });

  } catch (e) {
    console.log(e);
    return res.status(500).send({
      success: false,
      message: "Error While Resetting",
    });
  }
};


// reset Password

exports.resetPassword = async (req, res) => {
    try{
        const {newPassword, token} = req.body;

        if(!newPassword || !token) {
          return res.status(401).send({
              success: false,
              message: "Enter all Details",
          });
      }

        
        const user = await User.findOne({token:token});
        if(!user) {
          return res.status(401).send({
                success: false,
                message: "No user with the token",
            });
        }
        
        if( !(user.TokenExpiry > Date.now())) {
          return res.status(401).send({
                success: false,
                message: "Link Expired",
            });
        }
        
        const hashedPass = await bcrypt.hash(newPassword,10);

        const updatedPassword = await User.findOneAndUpdate({token:token}, {password: hashedPass}, {new:true});
        console.log(updatedPassword)
        return res.status(200).send({
            success: true,
            message: "Password Resetted succesfully"
        })



    }catch(e){
        console.log(e);
        return res.status(500).send({
        success: false,
        message: "Error While Resetting",
        });
    }

}
