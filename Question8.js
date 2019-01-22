/*
Q7. Determine whether a year is a leap year or not
Steps:
If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
The year is a leap year (it has 366 days).
The year is not a leap year (it has 365 days).
 */
 
function CheckLeapYear(year) {
    if((year % 4)% 2==0){
        return 1;
    }
    else if((year % 100) % 2== 0){
        return 0;
    }
    else if((year % 400)% 2==0){
        return 1;
    }
}
if(CheckLeapYear(1998) == 1)
    {
    console.log("The year is not a leap year as it has 365 days");
    }
    else
    console.log("The year is leap year as it has 366 days");

