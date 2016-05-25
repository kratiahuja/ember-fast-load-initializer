# Ember-fast-load-initializers

This addon is a fork of [ember-load-initializers](https://github.com/ember-cli/ember-load-initializers) with running faster than that.

This addon primarily assumes the requirejs contains a list of all AMD modules that are initializers or instance initializers.
Thereby, it does not walk through all your AMD modules to figure this out at runtime.

## Dependencies
This addon *should not* be used as a standalone replacement for `ember-load-initializers`. This addon should only be used with the following addons:
* [ember-cli-lazy-code](https://github.com/chadhietala/ember-cli-lazy-code) : v0.0.2+
* [ember-cli-string-module-loader](https://github.com/kratiahuja/ember-cli-string-module-loader) : v0.0.3+

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
