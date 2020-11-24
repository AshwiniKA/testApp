import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const buyerSchema = new Schema({
  buyerName: {
    type: String,
    required: [true, 'Buyer must have name'],
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
  ],
  bidprice: {
    type: Number,
    required: [true, 'Bid must have a price'],
  },
});
buyerSchema.plugin(mongoosePaginate);
export default mongoose.model('Buyer', buyerSchema);