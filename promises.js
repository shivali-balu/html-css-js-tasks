function fetchData() {
  return new Promise(function (resolve, reject) {
    // Simulate fetching data asynchronously
    setTimeout(function () {
      var data = "This is the fetched data";
      // Resolve the promise with the fetched data
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then(function (data) {
    console.log("Fetched data:", data);
  })
  .catch(function (error) {
    console.error("An error occurred:", error);
  });
