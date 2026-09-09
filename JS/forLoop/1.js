let sum = 0;

for (let x = 1; x <= 5; x++) {
    sum = sum + x;
}


// Step	x	sum
// 1	1	0 + 1 = 1
// 2	2	1 + 2 = 3
// 3	3	3 + 3 = 6
// 4	4	6 + 4 = 10
// 5	5	10 + 5 = 15
//   Stop


let count = 0;

for (let y = 1; y <= 5; y++) {
    count++;
}


// y = 1 → count = 1
// y = 2 → count = 2
// y = 3 → count = 3
// y = 4 → count = 4
// y = 5 → count = 5
// Stop

let average = sum / count;

//15 / 5 = 3

console.log("Sum =", sum);
console.log("Count =", count);
console.log("Average =", average);


// Explanation

// 1. First for loop – Initialize x from 1, and the loop continues until x becomes greater than 5.
// 2. Sum variable – sum = 0 is used to store the total of the numbers.
// 3. Add numbers – sum = sum + x adds each current value of x.
// 4. Second for loop – Initialize y from 1, and the loop continues until y becomes greater than 5.
// 5. Count variable – count = 0 is used to count the number of values.
// 6. Increment count – count++ increases the count by 1 in every loop.
// 7. Calculate average – average = sum / count calculates the average.
// 8. Print the result –  prints the sum, count, and average.