 
```javascript
 Define an array of numbers
const numbers = [12, 95, 55, 63, 888, 45];

// Log the entire array to the console
console.log(numbers);

// Loop through each number in the array and log each number to the console
for (const num of numbers) {
    console.log(num);
}


In this code:
- The `numbers` array contains a list of integers.
- The `console.log(numbers);` statement outputs the entire array to the console.
- The `for...of` loop iterates through each element (`num`) in the `numbers` array, and `console.log(num);` prints each element individually.


const fruits = ['orange','mango','banana','apple'];
console.log(fruits);
for(const fruit of fruits){
console.log(fruit);
console.log('i want to eat');
}
