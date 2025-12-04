import jwt from "jsonwebtoken";

const secretKey = "kldfjklsdjflsdjflsdjfjioejfsdojfioisjdo";

export const setUser = (user) => {
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
    role:user.role
  };
  return jwt.sign(payload, secretKey);
};

export const getUser = (token) => {
  try {
    if (!token) return null;
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};
