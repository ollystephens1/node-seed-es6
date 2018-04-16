import mongoose from 'mongoose';
import config from 'config';
import './schemas';

export default function dbConnect() {
  const uri = buildURI();

  // Connect to mongodb
  mongoose.connect(uri).catch((err) => {
    console.log(`Mongoose connection error: ${err.message}`);
  });

  // Have we connected successsfully?
  mongoose.connection.on('connected', () => {
    console.log(`Successfully connected to ${uri}`);
  });

  // Connection ended.
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
}

const buildURI = () => {
  const user = config.get('db.user');
  const pass = config.get('db.pass');
  const cluster = config.get('db.cluster');

  return `mongodb+srv://${user}:${pass}@${cluster}.mongodb.net/test`;
};


