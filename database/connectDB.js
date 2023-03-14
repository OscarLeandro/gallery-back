import mongoose from "mongoose";
mongoose.set('strictQuery',false)

try {
  mongoose.connect(process.env.MEMBER_CLOUD_DATABASE);
  console.log("DB CONNECTED");
} catch (err) {
  console.log("DB CONNECTION ERR", err);
  process.exit(1);
}
