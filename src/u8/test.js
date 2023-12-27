function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'Data fetched successfully!' };
      resolve(data);
    }, 1000);
  });
}

async function fetchDataAsync() {
  try {
    console.log('Start fetching data...');
    
  
    const result = await fetchData();
    // The execution pauses here until the promise is resolved
    console.log('Data received:', result.message);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Calling the asynchronous function
fetchDataAsync();
console.log('After calling fetchDataAsync');

  

  /**
   * this shows that the await clauses is non blocking, beause "await" is equvilant to ".then()". it gets transformed to it when interprete.
   * both .then() and await are non blocking, only await gets convert4ed to ".then()" and the value gets returend eventually  but in the meanwhile the code keeps executing
   * only when trying to access the value, the code stops executing, until the value has arrived
   */