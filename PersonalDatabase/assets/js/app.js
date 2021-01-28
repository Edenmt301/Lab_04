//Declaring variables 
// You can check this Variables are Available or not under the window object
var firstName; 
var lastName; 
var birthYear; 
var job;
// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
birthYear = prompt("Enter Your Birth year");
let tempAge=ageCalc(birthYear);
function ageCalc(birthYear)
{
    return new Date().getFullYear() - birthYear;

}

//Eligible to vote 
let isEligibleToVote;
tempAge = parseInt(tempAge);
// check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}
var weight; 
var height;
weight = prompt("Enter Your weight");
height = prompt("Enter Your height");
let calcBmi=function(weight,height){
    return (weight / Math.pow(height,2)).toFixed(3)
}
//family storage array 
let familyMember = new Array();
//number of family 
let numberOfFamily;
numberOfFamily = prompt("Number of Family  ? ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}


// Adding Self Invoking Function Expression 
(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    let index=0
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
           index++

    });

    // call to bmi calculator 
    console.log("Your BMI: " + calcBmi(weight, height));
})();
