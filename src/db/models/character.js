import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  name: { type: String } 
});

export default mongoose.model('Character', characterSchema);
