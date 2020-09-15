export const calculateBmi2 = (weightImp, heightImp) => {
  const bmiValue_imperial = ((weightImp / (heightImp * heightImp)) * 703).toFixed(2);
  const bmiMessageImp = setBMIMessage(bmiValue_imperial);
  return [bmiValue_imperial, bmiMessageImp];
};

const setBMIMessage = finalBMI => {
  if(finalBMI <= 18.5) {
    return "Underweight";
  }
  if(finalBMI > 18.5 && finalBMI <= 25) {
    return "Normal";
  }
  if(finalBMI > 25 && finalBMI <= 30) {
    return "Overweight";
  }
  if(finalBMI > 30) {
    return "Obese";
  }
};