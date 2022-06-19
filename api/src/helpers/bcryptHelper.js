import bcrypt from "bcrypt";
const salt = 100;

export const hashPassword = (val) => {
  return bcrypt.hashSync(val, salt);
};
