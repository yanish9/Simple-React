// Include React
var React = require("react");

// Here we include all of the sub-components
var Adder = require("./panels/Adder");
var Multiplier = require("./panels/Multiplier");
var Randomizer = require("./panels/Randomizer");
var Imgr = require("./panels/Imgr");

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  setCounter: function(data) {
    if (data + this.state.clicks >  500){
      alert("Okay");
    }else{

    this.setState({ clicks: data + this.state.clicks });
    }
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>Hey you! Click this button!</h1>
            <p>I do crazy things.</p>
            <p>
              {/*
                Here we create a button click.
                Note how we have an onClick event associated with our handleClick function.
                this.handleClick references the handleClick function defined above our render function
              */}
              <h1>{this.state.clicks}</h1>
            </p>
          </div>

          {/*
            Below we add each of the sub components.
            Note how we "pass" in the click count as a prop called "clicks"
          */}
          <div className="col-md-4">

            <Adder  setCounter = {this.setCounter} />

          </div>

          <div className="col-md-4">

            <Multiplier setCounter = {this.setCounter} />

          </div>


          <div className="col-md-4">

            <Randomizer setCounter = {this.setCounter}/>

          </div>

         

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
