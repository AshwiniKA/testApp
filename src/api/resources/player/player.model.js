import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const playerSchema = new Schema({
    playerID: {
    type: String,
    required: [true, 'Player must have an ID'],
  },
  birthYear: {
    type: String,
  },
  birthMonth: {
    type: String,
  },
  birthDay: {
    type: String,
  },
  birthCountry: {
    type: String,
  },
  birthState: {
    type: String,
  },
  birthCity: {
    type: String,
  },
  deathYear: {
    type: String,
  },
  deathMonth: {
    type: String,
  },
  deathDay: {
    type: String,
  },
  deathCountry: {
    type: String,
  },
  deathState: {
    type: String,
  },
  deathCity: {
    type: String,
  },
  deathCountry: {
    type: String,
  },
  nameFirst: {
    type: String,
  },
  nameLast: {
    type: String,
  },
  nameGiven: {
    type: String,
  },
  weight: {
    type: String,
  },
  height: {
    type: String,
  },
  bats: {
    type: String,
  },
  throws: {
    type: String,
  },
  debut: {
    type: String,
  },
  finalGame: {
    type: String,
  },
  retroID: {
    type: String,
  },
  bbrefID: {
    type: String,
  },
});
playerSchema.plugin(mongoosePaginate);
export default mongoose.model('Player', playerSchema);