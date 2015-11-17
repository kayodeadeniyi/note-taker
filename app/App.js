var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, function(Root){
  ReactDOM.render(<Root />, document.getElementById('app'));
});
