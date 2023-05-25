export const sendToken = (res, user, statusCode, message) => {
    const token = user.getJWTToken();
  
    const options = {
      httpOnly: true,
    };
  
    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      admin: user.isAdmin,
      prof : user.isProf,
    };
  
    res
      .status(statusCode)
      .cookie("token", token, options)
      .json({ success: true, message, user: userData });
  };