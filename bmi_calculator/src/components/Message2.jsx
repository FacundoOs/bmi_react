import React from "react";

const Message2 = (props) => {
  return (
    <p id="bmi-message">
      You are {props.bmiMessageImp} with a BMI of {props.bmiValue_imperial}
    </p>
  );
};

export default Message2;