import * as path from 'path';

import * as fallback from 'express-history-api-fallback';
import * as express from 'express';
const app = express();

import config from '../../config';

const clientDir = path.join(__dirname, '..', '..', config.clientDist);

app.use('/node_modules', express.static(path.join(__dirname, '..', '..', 'node_modules')));
app.use('/', express.static(clientDir));
app.use(fallback('/index.html'))

app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port}!`);
});
