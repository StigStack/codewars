// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// MY CODE

function findShort(s){
    const strArr = s.split(' ')
    let shortest = Infinity
    strArr.forEach((el => {
        if (el.length < shortest) {
            shortest = el.length
        }
    }))
    return shortest
  }