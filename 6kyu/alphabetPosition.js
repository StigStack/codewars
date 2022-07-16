// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// MY CODE

// function alphabetPosition(text) {
//     const alphabet = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     text = text.toLowerCase().replace(/[^a-z]/g, '').split('')

//     text.forEach((el, i) => {
//       text[i] = alphabet.indexOf(el) + 1  
//     })

//     return text.join(' ');
// }

function alphabetPosition(text) {
    text = text
        .toUpperCase()
        .match(/[A-Z]/g)
    if(text) {
      return text
          .map((c) => c.charCodeAt() - 64)
          .join(' ')
    }

    return ''
}