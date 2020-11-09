import mongoose from 'mongoose';

const { Schema } = mongoose;
const bidSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Bid must have name'],
  },
  price: {
    type: Number,
    default: 0,
    min: 10,
  },
});
export default mongoose.model('BidModel', bidSchema);