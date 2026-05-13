/**
 * Given an array **arr** consisting of distinct integers, identify every pair of elements whose absolute difference is the smallest among all possible pairs in the array.

For each qualifying pair **\[a, b\]** the following must hold:

- **a** and **b** are elements of **arr**
- **a &lt; b**
- **b - a** equals the minimum absolute difference that occurs between any two elements of **arr**

Return all such pairs sorted in ascending order based on the first element of each pair (and consequently the second element as well).

**Example 1**

```
Input: arr = [7, 3, 5, 9]
Output: [[3,5],[5,7],[7,9]]
Explanation: The smallest absolute difference is 2. The pairs (3,5), (5,7) and (7,9) each have this difference, and they are returned in increasing order.
```

**Example 2**

```
Input: arr = [2, 11, 14, 17, 21]
Output: [[11,14], [14,17]]
Explanation: The smallest absolute difference is 3. The pairs (11,14) and (14,17) each have this difference, and they are returned in increasing order.
```

**Example 3**

```
Input: arr = [12, -3, 8, -7, 4, -1]
Output: [[[-3, -1]]
Explanation: The smallest absolute difference is 2.
```

*/
/** My Solution  */
// class Solution {
//     /**
//      * Finds all pairs with the minimum absolute difference.
//      * @param {number[]} arr - array of distinct integers
//      * @returns {number[][]} - list of pairs [a, b] where a < b
//      */
//     closestNumberPairs(arr) {
//         arr.sort((a, b) => a - b); // Sort the array to find pairs easily
//         let temp;
//         const pairs = [];
//         for (let i = 1; i < arr.length; i++) {
//             if (i > 1) {
//                 if (temp > arr[i] - arr[i - 1]) {
//                     temp = arr[i] - arr[i - 1];
//                     pairs.length = 0;
//                     pairs.push([arr[i - 1], arr[i]]);
//                 } else if (temp === arr[i] - arr[i - 1]) {
//                     pairs.push([arr[i - 1], arr[i]]);
//                 } else {
//                     continue;
//                 }
//             } else {
//                 temp = arr[i] - arr[i - 1];
//                 pairs.push([arr[i - 1], arr[i]]);
//             }
//         }
//         // Your implementation here
//         return pairs;
//     }


// }


/** Optimized Solution  */
class Solution {
    /**
     * Finds all pairs with the minimum absolute difference.
     * @param {number[]} arr - array of distinct integers
     * @returns {number[][]} - list of pairs [a, b] where a < b
     */
    closestNumberPairs(arr) {
        arr.sort((a, b) => a - b);
        
        let minDiff = Infinity;
        const pairs = [];
        
        for (let i = 1; i < arr.length; i++) {
            const diff = arr[i] - arr[i - 1];
            
            if (diff < minDiff) {
                // New minimum: clear pairs and update
                minDiff = diff;
                pairs.length = 0;
                pairs.push([arr[i - 1], arr[i]]);
            } else if (diff === minDiff) {
                // Equal minimum: add to pairs
                pairs.push([arr[i - 1], arr[i]]);
            }
            // Skip if diff > minDiff
        }
        
        return pairs;
    }
}

const solution = new Solution();
const ob = solution.closestNumberPairs([7, 3, 5, 9]);
const ob1 = solution.closestNumberPairs([2, 11, 14, 17, 21]);
const ob2 = solution.closestNumberPairs([12, -3, 8, -7, 4, -1]);
console.log(ob); // Output: [[3,5],[5,7],[7,9]]
console.log(ob1); // Output: [[3,5],[5,7],[7,9]]
console.log(ob2); // Output: [[3,5],[5,7],[7,9]]