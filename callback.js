function fetchData(callback) {
    // Simulate fetching data asynchronously
    setTimeout(function() {
        var data = "This is the fetched data";
        // Invoke the callback function with the fetched data
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing data:", data);
}

fetchData(processData);
