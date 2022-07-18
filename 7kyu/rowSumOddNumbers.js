// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// MY CODE

function rowSumOddNumbers(n) {
    const findLeftRightNum = (side) => {
        let jump
        let stop
        if(side === 'r') {
            jump = 4
            stop = n * 2 + 2
        }else {
            jump = 2 
            stop = n * 2
        }

        let num = 1
        while (jump < stop){
            num += jump
            jump += 2
        }

        return num
    }

    const sumOdd = (n) => {
        return Math.pow(Math.floor((n + 1) / 2), 2)
    } 

    return  n === 1 ? 1 : sumOdd(findLeftRightNum('r')) - sumOdd(findLeftRightNum('l') - 1)
}

// MY CODE AFTER LEARNING WHAT HOGBEN'S CENTERED POLYGONAL NUMBERS ARE

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }