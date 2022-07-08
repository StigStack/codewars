// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



function reverseWords(str) {
    const words = string.split(' ')
    words.forEach((el, i, arr) => {
        arr[i] = el.split('').reverse().join('')
   })
   return words.join(' ')
 }