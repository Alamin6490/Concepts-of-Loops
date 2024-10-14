// let num = 1;
//while (num <= 10){ // focus on the condition
//console.log(num);
//num++;
//}

let num = 50;
while(num <=100){
    console.log(num);
    num++;
}


// how to run sum while loop

let num = 1;
let sum = 0;
while(num <= 10){
    console.log(num);
    sum = sum + num;
    console.assertlog('sum:', sum);
    num++;
}

// how to run even number in while loop
let num = 1;
while(num <= 10){
    console.log(num);
    if(num % 2 === 0){
        console.log('even number', num)
    }
}

//comment
let num = 1;  // Use 'let' so the value of 'num' can be changed

while (num <= 10) {  // Start a while loop that runs until 'num' is greater than 10
    console.log(num);  // Print the current value of 'num'
    
    if (num % 2 === 0) {  // If 'num' is an even number
        console.log('even number', num);  // Print that it's an even number
    }

    num++;  // Increment 'num' by 1 to prevent an infinite loop
}
