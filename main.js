// Story 
// 🍰 You are a cake decorator, and have a very superstitous client. 
// The client wants to order a number of cakes with sprinkles for a large party they are throwing. 
// The client requested that the number of sprinkles on the cakes should ideally be divisible by both 7 and 3, as these are the client's lucky numbers. 
// The client would also accept a sprinkle count divisible by either 7 OR 3. 

// Main task 
// Write a function that will take in the number of sprinkles and let you know if it fits the client's requirements. 
// Your function responses should mirror responses in the test cases, and your implementation should handle positive integers

// Skeleton function

module.exports = function calculateSprinkles (number) {
    // checking if number is an integer, and more than zero
    if (!Number.isInteger(number) || number <= 0) {
        return "Invalid input: Please provide a positive integer";
    }
    // main function logic 
    if (number % 7 === 0 && number % 3 === 0) {
    return "Great choice - number is divisible by both 3 and 7"
    } else if (number % 7 === 0 && number % 3 !== 0) {
    return "Number is divisible by 7, but not 3" 
    } else if (number % 7 !== 0 && number % 3 === 0) {
   return "Number is divisible by 3, but not 7" 
    } else if (number % 7 !== 0 && number % 3 !== 0) {
    return "Worst choice, number is not divisible by either 7 or 3"
   } else if (number === 0)
   return "Number must be a positive integer"
}
