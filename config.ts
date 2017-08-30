import * as path from 'path';

class Config {
  src = 'src';
  dist = 'dist';

  clientSrc = path.join(this.src, 'client');
  clientDist = path.join(this.dist, 'client');

  port = 3000;
}

const config = new Config();

export default config;
