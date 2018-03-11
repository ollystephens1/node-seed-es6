import express from 'express';
const router = express.Router();

router.get('/api', (req, res) => {
  const query = req.query;
  res.send({ query });
});

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

export default router;
