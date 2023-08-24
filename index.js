const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event){
    const currVal = +event.target.value;

    switch(event.target.name){
        case "celsius":
            kelvinEl.value = (currVal + 273.15).toFixed(2);
            fahrenheitEl.value = (currVal * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEl.value = ((currVal - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currVal - 32) / 1.8 + 273.15).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = (currVal - 273.15).toFixed(2);
            fahrenheitEl.value = ((currVal - 273.15) * 1.8 + 32).toFixed(2);
            break;
        default:
            alert("Invalid Input...");
    }
};