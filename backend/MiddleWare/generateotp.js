export const generateotp = (length = 6) => {
  let otp = "";
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * 10);
    otp += num;
  }
  return otp;
};
