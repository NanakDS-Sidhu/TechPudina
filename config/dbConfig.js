// db.js
import mongoose from 'mongoose';

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbUri = 'mongodb+srv://jksingh13:D1aRTbZxI0mfyNZl@cluster0.vikc3qc.mongodb.net/TechPudina?retryWrites=true&w=majority';


const connectDb = async () => {
  try {
    await mongoose.connect(dbUri, connectionOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDb;
