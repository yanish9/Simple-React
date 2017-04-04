// Include React
var React = require("react");

// Create the Adder Component
var Adder = React.createClass({

  handleClick: function() {
    // this.setState is ansynchronous for performance reasons. To ensure that the
    // setParent function get the updated number in time we will pass it the newNumber variable
    
    
    this.props.setCounter(6);
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Adder</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            The number of clicks is passed to us from Main.js inside props.
            We use that number to show the value inside of this component
          */}
  <h1> Humans</h1>
          <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
        
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Adder;
