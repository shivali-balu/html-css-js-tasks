function fetchData() {
    return new Promise(function(resolve, reject) {
        // Simulate fetching data asynchronously
        setTimeout(function() {
            var data = "This is the fetched data";
            // Resolve the promise with the fetched data
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        // Await the result of the fetchData promise
        var data = await fetchData();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

getData();
