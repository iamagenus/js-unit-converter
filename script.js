// Function to convert units
function convert() {
  // Get user inputs
  const inputValue = parseFloat(document.getElementById("inputNumber").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  // Perform conversion
  let result;
//Coversion units
  if (fromUnit === "grams" && toUnit === "kilograms") {
    result = inputValue / 1000;
  } else if (fromUnit === "kilograms" && toUnit === "grams") {
    result = inputValue * 1000;
  } else if (fromUnit === "grams" && toUnit === "milligrams") {
    result = inputValue * 1000;
  } else if (fromUnit === "milligrams" && toUnit === "grams") {
    result = inputValue / 1000;
  } else if (fromUnit === "grams" && toUnit === "pounds") {
    result = inputValue / 453.592;
  } else if (fromUnit === "pounds" && toUnit === "grams") {
    result = inputValue * 453.592;
  }  else if (fromUnit === "pounds" && toUnit === "milligrams") {
      result = inputValue * 453592;
    } else if (fromUnit === "milligrams" && toUnit === "kilograms") {
      result = inputValue / 1000000;
  } else {
    // Handle undefined conversion
    document.getElementById("result").innerText = "Error: Unsupported conversion.";
    return;
  }
  // Display result with six decimal places
document.getElementById("result").innerText = `Result: ${result.toFixed(6)} ${toUnit}`;

}


  