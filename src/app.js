import express from 'express';
//import { connect } from 'mongoose';
import logger from 'morgan';
import { connect } from './config/db';
import { restRouter } from './api';

const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))



//connect();
connect().then(() => {
  console.log('db connected');
}, error => {
  console.log(error, 'db connect error');
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}


app.use('/api', restRouter);
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});



app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
