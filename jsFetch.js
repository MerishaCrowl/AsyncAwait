// Asynchronous function to fetch city data
async function fetchCityData(cityName) {
  try {
    const url = `https://geocode.xyz/${cityName}?json=1`; // URL to fetch city data
    const response = await fetch(url); // Fetch data from the URL
    const data = await response.json(); // Parse response data as JSON

    // Extract latitude and longitude from the data
    const latitude = data.latt;
    const longitude = data.longt;

    console.log(`City: ${cityName}`);
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Invoke the async function with different cities
fetchCityData("jamestown");
fetchCityData("minnetonka");
fetchCityData("austin");
