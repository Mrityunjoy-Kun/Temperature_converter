document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const convertButton = document.getElementById('convertButton');
    const result = document.getElementById('result');
    const formulaDisplay = document.getElementById('formulaDisplay');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const from = fromUnit.value;
        const to = toUnit.value;
        let convertedTemperature;
        let formula;

        if (isNaN(temperature)) {
            result.textContent = 'Please enter a valid number.';
            formulaDisplay.textContent = '';
            return;
        }

        if (from === 'celsius' && to === 'fahrenheit') {
            convertedTemperature = (temperature * 9/5) + 32;
            formula = `${temperature}°C × 9/5 + 32 = ${convertedTemperature}°F`;
        } else if (from === 'celsius' && to === 'kelvin') {
            convertedTemperature = temperature + 273.15;
            formula = `${temperature}°C + 273.15 = ${convertedTemperature}K`;
        } else if (from === 'fahrenheit' && to === 'celsius') {
            convertedTemperature = (temperature - 32) * (5/9);
            formula = `(${temperature}°F - 32) × 5/9 = ${convertedTemperature}°C`;
        } else if (from === 'fahrenheit' && to === 'kelvin') {
            convertedTemperature = (temperature - 32) * (5/9) + 273.15;
            formula = `(${temperature}°F - 32) × 5/9 + 273.15 = ${convertedTemperature}K`;
        } else if (from === 'kelvin' && to === 'celsius') {
            convertedTemperature = temperature - 273.15;
            formula = `${temperature}K - 273.15 = ${convertedTemperature}°C`;
        } else if (from === 'kelvin' && to === 'fahrenheit') {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            formula = `(${temperature}K - 273.15) × 9/5 + 32 = ${convertedTemperature}°F`;
        } else {
            convertedTemperature = temperature; // Same unit conversion
            formula = `${temperature}${from.toUpperCase()} = ${convertedTemperature}${to.toUpperCase()}`;
        }

        result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${to}`;
        formulaDisplay.textContent = `Formula: ${formula}`;
    });
});