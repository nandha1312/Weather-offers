// Simulated weather temperature
const currentTemperature = 34;
const weather = currentTemperature > 30 ? "hot" : currentTemperature < 20 ? "cold" : "mild";

// Send weather data to Adobe Experience Platform via Web SDK
function sendWeatherToAEP() {
  if (typeof alloy === "function") {
    alloy("sendEvent", {
      xdm: {
        environment: {
          weather: {
            temperature: currentTemperature,
            condition: weather
          }
        }
      }
    });
  } else {
    console.error("Alloy SDK not loaded.");
  }
}

sendWeatherToAEP();

// Simulate rendering the offer
document.getElementById("offerContainer").innerHTML = `
  <div>
    <h2>${weather.toUpperCase()} Weather Offer</h2>
    <p>Enjoy our special deal for ${weather} days!</p>
  </div>
`;
