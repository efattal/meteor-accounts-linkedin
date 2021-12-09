Package.describe({
  name: 'codifytools:accounts-linkedin',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Login service for Facebook accounts',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');

  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('codifytools:linkedin-oauth');
  api.imply('codifytools:linkedin-oauth');

  api.use('http', ['client', 'server'])

  api.addFiles("linkedin.js");
});