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