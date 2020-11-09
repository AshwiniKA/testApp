//import Joi from 'joi';

const Joi = require('@hapi/joi');
import Song from './song.model';

export default {
  async create(req, res) {
    
    var value = req.body;
    console.log(value);
    try {
                const schema = Joi.object().keys({
                title: Joi.string().required(),
                url: Joi.string().required(),
                rating: Joi.number()
                    .integer()
                    .min(0)
                    .max(5)
                    .optional(),
                });
                const { error } = schema.required().validate(value);                          
                if (error && error.details) {
                return res.status(400).json(error);
                }

                const song = await Song.create(value);
                return res.json(song);
        }catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
  },

  async findAll(req, res) {
    try {
        const { page, perPage } = req.query;
        const options = {
          page: parseInt(page, 10) || 1,
          limit: parseInt(perPage, 10) || 10,
        };
        const songs = await Song.paginate({}, options);
      //const songs = await Song.find(); just findall()
     // const songs = await Song.paginate(); just paginate
      return res.json(songs);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

//find by id
  async findOne(req, res) {
    try {
      const { id } = req.params;
      const song = await Song.findById(id);
      if (!song) {
        return res.status(404).json({ err: 'could not find song' });
      }
      return res.json(song);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

//delete by id
async delete(req, res) {
  try {
    const { id } = req.params;
    const song = await Song.findOneAndRemove({ _id: id });
    if (!song) {
      return res.status(404).json({ err: 'could not find song' });
    }
    return res.json(song);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
},

//update
async update(req, res) {
  try {
    var value = req.body;
    console.log(value);

    const { id } = req.params;
    const schema = Joi.object().keys({
      title: Joi.string().optional(),
      url: Joi.string().optional(),
      rating: Joi.number()
        .integer()
        .min(0)
        .max(5)
        .optional(),
    });
    
    const { error } = schema.required().validate(value);                          
      if (error && error.details) {
            return res.status(400).json(error);
      }
  
    const song = await Song.findOneAndUpdate({ _id: id }, value, { new: true });
    if (!song) {
      return res.status(404).json({ err: 'could not find song' });
    }
    return res.json(song);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
},


};