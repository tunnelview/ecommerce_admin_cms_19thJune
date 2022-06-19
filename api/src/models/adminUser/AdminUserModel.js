import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    default: "inactive",
  },
});
