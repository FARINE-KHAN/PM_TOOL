import mongoose, { Schema } from "mongoose";

const TaskSheetSchema = mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    task: {
      type: String,
    },
    timeTaken: {
      type: Date,
    },
    date: {
        type: Date,
      },
    projectName: {
      type: String,
    },
    isCompleted:{
        type:Boolean,
        default: false
    }
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Tasksheet", TaskSheetSchema);
