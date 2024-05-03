function divide(x, y) {
    try {
        // Attempt to divide x by y
        if (y === 0) {
            // Throw a custom error if y is zero
            throw new Error("Division by zero is not allowed.");
        }
        return x / y;
    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error.message);
        // Return a default value or perform fallback action
        return null;
    }
}

// Test the divide function
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: An error occurred: Division by zero is not allowed. , null
