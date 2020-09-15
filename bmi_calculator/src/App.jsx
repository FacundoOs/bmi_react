import React, { Component } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import "./App.css";
import { calculateBmi } from "./helpers/bmiHelper";
import { calculateBmi2 } from "./helpers/bmiHelper2";
import Message from "./components/Message";
import Message2 from "./components/Message2";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    bmiValue_imperial: "",
    weightImp: "",
    heightImp: "",
    bmiMessageImp: ""
  };
//
  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = (e) => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage});
  };

//
  onChangeHandlerImp = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmitHandlerImp = (e) => {
    e.preventDefault();
    const [bmiValue_imperial, bmiMessageImp] = calculateBmi2(
      this.state.weightImp,
      this.state.heightImp
    );
    this.setState({ bmiValue_imperial: bmiValue_imperial, bmiMessageImp: bmiMessageImp });
  };

  render() {
    return (
      <div>
        <Form1
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
        <Form2
          weightImp={this.state.weightImp}
          heightImp={this.state.heightImp}
          onChangeHandlerImp={this.onChangeHandlerImp}
          onSubmitHandlerImp={this.onSubmitHandlerImp}
        />
        {this.state.bmiValue_imperial && (
          <Message2
            bmiValue_imperial={this.state.bmiValue_imperial}
            bmiMessageImp={this.state.bmiMessageImp}
          />
        )}
      </div>
    );
  }
}

export default App;
