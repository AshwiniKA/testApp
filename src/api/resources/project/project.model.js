import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const projectSchema = new Schema({
  ProjectTitle: {
    type: String,
    required: [true, 'Project must have title'],
  },
  ProjectDate: {
    type: Date,
    required: [true, 'Project must have date'],
  },
});
projectSchema.plugin(mongoosePaginate);
export default mongoose.model('Project', projectSchema);