import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import noteRoute from './note.route';
import lableRoute from './lable.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/note', noteRoute);
  router.use('/lable', lableRoute);

  return router;
};

export default routes;
