import AdminUserSchema from "./AdminUserSchema";

export const createNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};
