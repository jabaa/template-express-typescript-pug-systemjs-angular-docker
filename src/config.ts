import * as path from 'path';

class Config {
  SRC = 'src';
  DIST = 'dist';

  CLIENT_SRC = path.join(this.SRC, 'client');
  CLIENT_DIST = path.join(this.DIST, 'client');

  SERVER_SRC = path.join(this.SRC, 'server');
  SERVER_DIST = path.join(this.DIST, 'server');

  EXPRESS_PORT = 3000;
  BROWSER_SYNC_PORT = 3001;

  BROWSER_SYNC_INIT = {
    injectChanges: false,
    // middleware: [require('connect-history-api-fallback')({
    //   index: '/index.html'
    // })],
    open: true,
    port: this.BROWSER_SYNC_PORT,
    proxy: `localhost:${this.EXPRESS_PORT}`,
    // server: {
    //   baseDir: this.CLIENT_DIST,
    //   routes: {
    //     ['/node_modules']: 'node_modules',
    //     ['/']: this.CLIENT_DIST
    //   }
    // },
    startPath: '/',
    ui: false
  };
}

const config = new Config();

export default config;
