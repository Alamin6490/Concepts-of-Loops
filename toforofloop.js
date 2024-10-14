/**
 * for( ;   ;   ;){
 * }
 * 
 * 
 *  for(first part ; second part ; third part){
 * loop statement
 * }
 }
 */

 /**
  * for( loop variable declaration ; loop condition; loop variable change )
  */

 for ( let num = 0; num < 5; num++){
    console.log(num);
 }

  

### Explanation:

1. **Initialization (`let num = 0;`)**: 
   - The loop starts by initializing the variable `num` to 0. This only happens once at the beginning of the loop. 
   - `let` is used so the variable `num` is block-scoped, meaning it only exists inside the loop and is not accessible outside.

2. **Condition (`num < 5;`)**: 
   - Before every iteration of the loop, the condition `num < 5` is checked. 
   - If the condition is `true`, the loop continues. If it’s `false`, the loop stops.
   - In this case, the loop will run while `num` is less than 5, so it will iterate 5 times (from 0 to 4).

3. **Increment (`num++`)**: 
   - After each iteration, the `num++` expression is executed, which increases the value of `num` by 1. 
   - This ensures that the value of `num` changes with each loop iteration, eventually making the condition `num < 5` false.

4. **Loop Body (`console.log(num);`)**: 
   - During each iteration of the loop, the current value of `num` is printed to the console using `console.log(num)`.
   - The output will be: `0, 1, 2, 3, 4` (one value printed per line).

### Summary of the Loop Execution:
- **First iteration**: `num = 0`, prints `0`.
- **Second iteration**: `num = 1`, prints `1`.
- **Third iteration**: `num = 2`, prints `2`.
- **Fourth iteration**: `num = 3`, prints `3`.
- **Fifth iteration**: `num = 4`, prints `4`.
- When `num` becomes `5`, the condition `num < 5` is `false`, so the loop stops, and no further values are printed.

