const Joi = require('@hapi/joi');
import Project from './project.model';

export default {
  async create(req, res) {
    
    var value = req.body;
    console.log(value);
    try {
                const schema = Joi.object().keys({
                ProjectTitle: Joi.string().required(),
                ProjectDate: Joi.date().required(),
                });
                const { error } = schema.required().validate(value);                          
                if (error && error.details) {
                return res.status(400).json(error);
                }

                const project = await Project.create(value);
                return res.json(project);
        }catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
  },

//   async findAll(req, res) {
//     try {
//         const { page, perPage } = req.query;
//         const options = {
//           page: parseInt(page, 10) || 1,
//           limit: parseInt(perPage, 10) || 10,
//         };
//         const songs = await Song.paginate({}, options);
//       //const songs = await Song.find(); just findall()
//      // const songs = await Song.paginate(); just paginate
//       return res.json(songs);
//     } catch (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }
//   },

// //find by id
//   async findOne(req, res) {
//     try {
//       const { id } = req.params;
//       const song = await Song.findById(id);
//       if (!song) {
//         return res.status(404).json({ err: 'could not find song' });
//       }
//       return res.json(song);
//     } catch (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }
//   },




};