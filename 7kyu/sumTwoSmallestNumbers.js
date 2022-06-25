// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// MY CODE 

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}

function sumTwoSmallestNumbers(numbers) {  
    let min = Infinity;
    let secondMin = Infinity;

    for (i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num > -1) {
            if(num < min) {
                secondMin = min;
                min = num;
            }else if (num < secondMin) {
                secondMin = num;
            }
        }
    }
    return min + secondMin
}