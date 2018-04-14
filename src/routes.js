import express from 'express';
import { resSuccess, resError } from '@core/response';

const router = express.Router();

router.get('/api', (req, res) => {
  getData()
    .then(resSuccess(res))
    .catch(resError(res));
});

const getData = () => {
  return Promise.resolve([
    {
      id: 1,
      name: 'Arsenal'
    },
    {
      id: 2,
      name: 'Manchester Utd'
    },
    {
      id: 3,
      name: 'Manchester City'
    },
    {
      id: 4,
      name: 'Chelsea'
    }
  ]);
};

router.get('/api/:id', (req, res) => {
  const params = req.params.id;
  res.send({ params });
});

router.post('/api', (req, res) => {
  const body = req.body;
  res.send({ body });
});

router.put('/api', (req, res) => {
  const body = req.body;
  res.send({ body });
});

router.delete('/api:id', (req, res) => {
  const params = req.params.id;
  res.send({ params });
});

router.get('/', (req, res) => {
  res.send('This is a Node.js API seed Webpack & Babel with ES6');
});

export default router;
