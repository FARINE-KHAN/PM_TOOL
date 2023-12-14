import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    role: {
      type: String,
      enum:["Manager","Accountant","HR","Employee"]
    },
    employeeId: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fempty-profile-picture&psig=AOvVaw0-cxLcJtVYkuVNAShkpe76&ust=1697989380469000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODRt8G9h4IDFQAAAAAdAAAAABAE",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    team: {
      type: String,
      enum:["Team-A","Team-B","Team-C"]
    },
    // createdBy:{
    //   type : Schema.Types.ObjectId ,
    //     ref : 'User'
    // },
    // updatedBy:{
    //   type : Schema.Types.ObjectId ,
    //     ref : 'User'
    // }
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", UserSchema);
