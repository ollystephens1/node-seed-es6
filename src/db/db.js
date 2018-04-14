import mongoose from 'mongoose';
import config from 'config';

export default function dbConnect() {
  const uri = buildURI();
  mongoose.connect(uri);

  // Have we connected successsfully?
  mongoose.connection.on('connected', () => {
    console.log(`Successfully connected to ${uri}`);
  });

  // Something went wrong, show the error
  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
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
