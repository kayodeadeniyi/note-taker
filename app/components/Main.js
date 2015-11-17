var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SearchGithub = require('./SearchGithub')

var Main = React.createClass({
  render: function(){
    return(
      <div >
        <nav className="navbar navbar-default">
          <div className="col-md-8 col-md-offset-2">
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;
