const Joi = require('@hapi/joi');
import Player from './player.model';

export default {

  async findAll(req, res) {
    try {
        const { page, perPage } = req.query;
        const options = {
          page: parseInt(page, 10) || 1,
          limit: parseInt(perPage, 10) || 10,
        };
        const players = await Player.paginate({}, options);
     // const players = await Player.find(); 
      return res.json(players);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

//find by id
  async findOne(req, res) {
    try {
      const { id } = req.params;
      const players = await Player.findById(id);
      if (!players) {
        return res.status(404).json({ err: 'could not find Player' });
      }
      return res.json(players);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async findByName(req, res) {
    try {
      const { id } = req.params;
      const player = await Player.find({"nameFirst":id}).limit(1);
      if (!player) {
        return res.status(404).json({ err: 'could not find player' });
      }
      return res.json(player);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

// //delete by id
// async delete(req, res) {
//   try {
//     const { id } = req.params;
//     const song = await Song.findOneAndRemove({ _id: id });
//     if (!song) {
//       return res.status(404).json({ err: 'could not find song' });
//     }
//     return res.json(song);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send(err);
//   }
// },



};