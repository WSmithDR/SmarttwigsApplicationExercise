import mongoose, { ConnectOptions } from 'mongoose';

const dbOptions:ConnectOptions = {
    autoCreate: true
}
// Define a function to connect to MongoDB
const connectToDB = async (dbUrl: string): Promise<void> => {
  try {
    await mongoose.connect(dbUrl, dbOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectToDB
