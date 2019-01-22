/*
Q4. The Calculator

Write a function that will take one argument (a number) and perform the following operations:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
 */
"use strict";
const PI=3.14;

function Calculator(number) {
    let half=number/2;
    let square=half*half;
    let area= PI*square*square;
    console.log("The area is "+area);
}
Calculator(10);
