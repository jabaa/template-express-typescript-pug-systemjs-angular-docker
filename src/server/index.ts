import * as path from 'path';

import * as fallback from 'express-history-api-fallback';
import * as express from 'express';
const app = express();

import config from '../config';

import * as bodyParser from 'body-parser';

const clientDir = path.join(__dirname, '..', '..', config.CLIENT_DIST);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/node_modules', express.static(path.join(__dirname, '..', '..', 'node_modules')));
app.use('/', express.static(clientDir));
app.use(fallback('/index.html'))

app.listen(config.EXPRESS_PORT, () => {
  console.log(`Example app listening on port ${config.EXPRESS_PORT}!`);
});
