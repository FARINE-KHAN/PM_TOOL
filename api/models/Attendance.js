import mongoose, { Schema } from "mongoose";

const AttendanceSchema = mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    loginTime: {
      type: Date,
    },
    logoutTime: {
      type: Date,
    },
    employeeId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Attendance", AttendanceSchema);
