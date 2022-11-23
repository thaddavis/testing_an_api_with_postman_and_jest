import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface IAccount {
  email: string;
  resetPasswordToken?: string;
  verificationToken?: string;
  passwordHash: string;
  name: string;
  verified: boolean;
}

const accountSchema = new Schema<IAccount>({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
  verificationToken: String,
  passwordHash: String,
  name: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

accountSchema.plugin(uniqueValidator);

export const Account = mongoose.model("Account", accountSchema);
