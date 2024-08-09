import { test, expect } from "vitest";
import { calculateSprinkles } from "/main.js";

test('divisible by 7 test', () => {
expect(calculateSprinkles(70)).toBe("Number is divisible by 7, but not 3")
})

test('invalid input / edge case divisible by 7 test', () => {
expect(calculateSprinkles(70.5)).toBe("Invalid input: Please provide a positive integer")
})

test('divisible by 7 & 3 test', () => {
expect(calculateSprinkles(84)).toBe("Great choice - number is divisible by both 3 and 7")
}) 

test('edge case divisible by 7 & 3 test', () => {
expect(calculateSprinkles(83)).toBe("Worst choice, number is not divisible by either 7 or 3")
}) 

test('divisible by 3 test', () => {
expect(calculateSprinkles(30)).toBe("Number is divisible by 3, but not 7")
})

test('not divisible both 3 or 7', () => {
expect(calculateSprinkles(55)).toBe("Worst choice, number is not divisible by either 7 or 3")
})

test('invalid input test 1', () => {
expect(calculateSprinkles(0)).toBe("Invalid input: Please provide a positive integer")
})

test('invalid input test 2', () => {
expect(calculateSprinkles("£")).toBe("Invalid input: Please provide a positive integer")
})

test('invalid input test 3', () => {
expect(calculateSprinkles("abc")).toBe("Invalid input: Please provide a positive integer")
})
