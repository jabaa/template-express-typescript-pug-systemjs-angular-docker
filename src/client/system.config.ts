SystemJS.config({
  map: {
    app: 'app',

    '@angular/animations': 'node_modules/@angular/animations',
    '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser',
    '@angular/common': 'node_modules/@angular/common',
    '@angular/compiler': 'node_modules/@angular/compiler',
    '@angular/core': 'node_modules/@angular/core',
    '@angular/forms': 'node_modules/@angular/forms',
    '@angular/http': 'node_modules/@angular/http',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic',
    '@angular/router': 'node_modules/@angular/router',
    '@angular/animations/browser': 'node_modules/@angular/animations',

    '@angular/common/testing': 'node_modules/@angular/common',
    '@angular/compiler/testing': 'node_modules/@angular/compiler',
    '@angular/core/testing': 'node_modules/@angular/core/bundles',
    '@angular/http/testing': 'node_modules/@angular/http/bundles',
    '@angular/platform-browser/testing': 'node_modules/@angular/platform-browser',
    '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic',
    '@angular/router/testing': 'node_modules/@angular/router',

    'rxjs': 'node_modules/rxjs'
  },
  packages: {
    'app': {
      main: 'main',
      defaultExtension: 'js'
    },
    '@angular/animations': {
      main: 'bundles/animations.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'bundles/common.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'bundles/compiler.umd.js',
      defaultExtension: 'js'
    },
    '@angular/core/testing': {
      main: 'bundles/core-testing.umd.js',
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'bundles/core.umd.js',
      defaultExtension: 'js'
    },
    '@angular/forms': {
      main: 'bundles/forms.umd.js',
      defaultExtension: 'js'
    },
    '@angular/http': {
      main: 'bundles/http.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'bundles/platform-browser.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'bundles/platform-browser-dynamic.umd.js',
      defaultExtension: 'js'
    },
    '@angular/router': {
      main: 'bundles/router.umd.js',
      defaultExtension: 'js'
    },
    '@angular/service-worker': {
      main: 'bundles/service-worker.umd.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      main: 'Rx.js',
      defaultExtension: 'js'
    }
  }
});
