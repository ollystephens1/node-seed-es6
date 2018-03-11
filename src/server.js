import express from 'express';

const PORT = 3000;
const app = express();

console.log('YES');

app.get('/', (req, res) => res.send('This is a Node.js API seed Webpack & Babel with ES6'));
app.listen(PORT, () => console.log(`Node API running on port ${PORT}`));
