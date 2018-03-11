import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';
import routes from './routes';

const PORT = config.get('server.port');
const app = express();

app.use(bodyParser.json({
  limit: config.get('server.bodyParserLimit')
}));

app.use('/', routes);

app.get('/', (req, res) => res.send('This is a Node.js API seed Webpack & Babel with ES6'));

app.listen(PORT, () => console.log(`Node API running on port ${PORT}`));
