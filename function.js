document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("temp");
    var selectElement1 = document.getElementById("temp1");

    selectElement.addEventListener("change", function() {
        var selectedValue = selectElement.value;

        var options = selectElement1.options;
        for (var i = 0; i < options.length; i++) {
            if (options[i].value === selectedValue) {
                options[i].style.display = "none";
            } else {
                options[i].style.display = ""; // Show other options
            }
        }
    });

    var submitButton = document.getElementById("submitButton");
    var inputTemperature = document.getElementById("inputTemperature");
    var outputTemperature = document.getElementById("outputTemperature");

    submitButton.addEventListener("click", function() {
        var inputUnit = selectElement.value;
        var outputUnit = selectElement1.value;
        var inputValue = parseFloat(inputTemperature.value);

        var result = convertTemperature(inputValue, inputUnit, outputUnit);

        outputTemperature.textContent = result.toFixed(2); // You can format the result as needed
    });

    function convertTemperature(inputValue, inputUnit, outputUnit) {
        if (inputUnit === "0" && outputUnit === "1") {
            return inputValue - 273.15;
        } else if (inputUnit === "0" && outputUnit === "2") {
            return (inputValue - 273.15) * (9/5) + 32;
        } else if (inputUnit === "1" && outputUnit === "0") {
            return inputValue + 273.15;
        } else if (inputUnit === "1" && outputUnit === "2") {
            return (inputValue * 9/5) + 32;
        } else if (inputUnit === "2" && outputUnit === "0") {
            return ((inputValue - 32) * 5/9) + 273.15;
        } else if (inputUnit === "2" && outputUnit === "1") {
            return (inputValue - 32) * 5/9;
        } else {
            return inputValue;
        }
    }
});
