import React, { Component } from "react";
import "./App.css";

//its a function that returns higer order compoent
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="age">
          Your age: <span>{this.props.age}</span>
        </div>
        <button className="ageDown btn btn-danger" onClick={this.props.onAgeDown}>Age Down</button>
        <button className="ageUp btn btn-success" onClick={this.props.onAgeUp}>Age UP</button>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
