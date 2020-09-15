import React from "react";

const Form2 = props => {
  return (
    <form onSubmit={props.onSubmitHandlerImp}>
      <label htmlFor="weightImp">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in lbs"
        value={props.weightImp}
        name="weightImp"
        id="weightImp"
        onChange={props.onChangeHandlerImp}
      />
      <label htmlFor="heightImp">Height</label>
      <input
        type="number"
        required
        placeholder="Height in inch"
        value={props.heightImp}
        name="heightImp"
        id="heightImp"
        onChange={props.onChangeHandlerImp}
      />
      <button id="calculate2">Calculate BMI</button>
    </form>
  );
};
export default Form2;
