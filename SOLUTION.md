Proposed Solution to Kata: 

export function calculateSprinkles (number) {
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