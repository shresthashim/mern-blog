import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(r =>
  console.log('Connected to MongoDB')
).catch(e => console.log('Error connecting to MongoDB', e))
app.listen(`3000`, () => {
  console.log(`Server is running on port 3000`);
})

app.use('/api/user', userRoute )