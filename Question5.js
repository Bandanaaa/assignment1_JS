/*
Q4. The MixUP

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
(separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at
 least 2 characters long. For example:

mixUp('mix', 'pod'); // Outputs: 'pox mid'
mixUp('dog', 'dinner'); // Outputs:  'dig donner'
 */
 
"use strict";
function MixUP(string1,string2) {
    let value=string2.slice(0,2)+ string1.slice(2)+" " + string1.slice(0,2)+ string2.slice(2);
    console.log(value);
}
MixUP('mix','pod');
MixUP('dog','dinner');
