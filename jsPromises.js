// Function to generate a random number after a delay
function getRandomNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100); // Generate a random number
        resolve(randomNumber); // Resolve the promise with the random number
      }, 500); // Delay of 0.5 seconds (500 milliseconds)
    });
  }
  
  // Async function that invokes getRandomNumber and prints the result
  async function printRandomNumber() {
    const randomNumber = await getRandomNumber(); // Await the random number
    console.log(randomNumber); // Print the random number
  }
  
  // Invoke the async function
  printRandomNumber();


  // Import the 'node-fetch' library for making HTTP requests
const fetch = require('node-fetch');

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
    console.log('Error:', error);
  }
}

// Invoke the async function with different cities
fetchCityData('seattle');
fetchCityData('new york');
fetchCityData('london');
