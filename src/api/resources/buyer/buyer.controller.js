//import buyerService from './buyer.service';
import Buyer from './buyer.model';

export default {
  async create(req, res) {
          
    var value = req.body;
    console.log(value);
    try {
        const buyer = await Buyer.create(value);
        return res.json(buyer);
    } catch (err) {
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
      const buyers = await Buyer.find().sort({'ProjectDate': 'desc'}).limit(2); //just findall()
      return res.json(buyers);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async findOne(req, res) {
    try {
      const { id } = req.params;
      const buyer = await Buyer.find({ projects : {$all : [id]}}).sort({'bidprice': 'desc'}).limit(1);
      if (!buyer) {
        return res.status(404).json({ err: 'could not find buyer' });
      }
      return res.json(buyer);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};