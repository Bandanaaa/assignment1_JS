/*
Q3. The Temperature Converter
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
 */
"use strict";

function temp(cel,fah) {
    let fahrenheit= cel*(9/5)+32;
    console.log("The converted fahrenheit value from "+cel+"°C is "+fahrenheit+"°F" );
    let celsius=(fah-32)*5/9;
    console.log("The converted celsius value from "+fah+"°F is "+celsius+"°C");
}
temp(32,250);
