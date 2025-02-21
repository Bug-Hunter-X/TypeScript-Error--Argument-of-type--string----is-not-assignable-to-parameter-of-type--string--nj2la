# TypeScript Type Error Bug

This repository demonstrates a common TypeScript type error and its solution. The bug arises from passing an array of strings to a function expecting a single string. The solution showcases proper type handling and iteration to address the error.

## Bug

The `bug.ts` file contains a function `greeter` that takes a string and returns a greeting. The bug is introduced when an array of strings is passed to this function instead of a single string. TypeScript's type system correctly identifies this as an error.

## Solution

The `bugSolution.ts` file provides a solution to the bug. Instead of directly passing the array, it iterates through the array and calls the `greeter` function for each element, handling the type mismatch correctly.