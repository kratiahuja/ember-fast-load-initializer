import Ember from 'ember';

export default function(app, prefix) {
  // read all the initializer modules directly from the requirejs object
  // the initializer registry is provided at build time by the ember-cli-lazy-code addon
  // and read by the fast loader called ember-cli-string-module-loader
  var initializerDeps = requirejs.intializerEntries;
  for (var i = 0; i < initializerDeps.length; i++) {
    var dep = initializerDeps[i];
    var moduleName = dep.moduleName;

    var module = require(moduleName, null, null, true);
    if (!module) { throw new Error(moduleName + ' must export an initializer.'); }

    var initializerType = Ember.String.camelize(dep.matches[1].substring(0, dep.matches[1].length - 1));
    var initializer = module['default'];
    if (!initializer.name) {
      var initializerName = moduleName.match(/[^\/]+\/?$/)[0];
      initializer.name = initializerName;
    }

    if (app[initializerType]) {
      app[initializerType](initializer);
    }
  }
}
