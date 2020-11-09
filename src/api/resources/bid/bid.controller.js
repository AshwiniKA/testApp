const Joi = require('@hapi/joi');
import BidModel from './bid.model';

export default {
  async create(req, res) {
    
    var value = req.body;
    //const value = JSON.stringify(obj);
    console.log(value);
    try {
                const schema = Joi.object().keys({
                name: Joi.string().required(),
                price: Joi.number().required()
                    .integer()
                    .min(10),
                });
                const { error } = schema.required().validate(value);             
                if (error && error.details) {
                return res.status(400).json(error);
                }

                const bidValue = await BidModel.create(value);
                return res.json(bidValue);
        }catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
  },

 // async findAll(req, res) {
 //   try {
//      const songs = await Song.find();
//      return res.json(songs);
//    } catch (err) {
//      console.error(err);
//      return res.status(500).send(err);
//    }
//  },
};