SystemJS.config({
  packages: {
    app: {
      defaultExtension: 'js',
        main: 'main'
    },
    rxjs: {
      defaultExtension: 'js',
        main: 'Rx.js'
    },
    tslib: {
      defaultExtension: 'js',
        main: 'tslib.js'
    }
  },
  paths: {
    'app': 'app',

    '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
    '@angular/animations/browser': 'node_modules/@angular/animations',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'node_modules/@angular/common/bundles/common-http.umd.js',
    '@angular/common/testing': 'node_modules/@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/compiler/testing': 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/core/testing': 'node_modules/@angular/core/bundles/core-testing.umd.js',
    '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
    '@angular/platform-browser/testing': 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
    '@angular/router/testing': 'node_modules/@angular/router/bundles/router-testing.umd.js',
    '@angular/service-worker': 'node_modules/@angular/service-worker/bundles/service-worker.umd.js',
    'rxjs': 'node_modules/rxjs',

    'tslib': 'node_modules/tslib'
  }
});
