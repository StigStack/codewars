// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// MY CODE

function find_average(array) {
    if(array[0]){
        const total = array.reduce((previousValue, currentValue) => previousValue + currentValue);
        return total / array.length;
    }else {
        return 0;
    }
  }