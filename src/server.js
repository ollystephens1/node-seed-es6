import express from 'express';
import config from 'config';
import helmet from 'helmet';
import logger from 'morgan';
import compression from 'compression';
import timeout from 'connect-timeout';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import log from '@core/logger';
import routes from './routes';

const PORT = config.get('server.port');
const CLIENT = config.get('client');
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({
  limit: config.get('server.bodyParserLimit')
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(timeout(config.get('server.timeout')));

app.use('/', routes);
app.listen(PORT, () => log.info(`${CLIENT.name} running on port ${PORT}`));
