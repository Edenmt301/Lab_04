
function addition(numbers)
{  
    result=0
    numbers.forEach(function(member) {
        result=result + parseInt(member)
    });
    console.log("result: " + result);
}
function subtraction(first,second)
{
    result=parseInt(first) - parseInt(second);
    console.log("result: " + result);

}
function multiplication(numbers)
{
    result=1
    numbers.forEach(function(member) {
        result=result * parseInt(member)
    });
    console.log("result: " + result);

}
function division(first,second)
{
    result=(parseInt(first) / parseInt(second)).toFixed(3);
    console.log("result: " + result);
}



(function() {

    var first;
    var second;
    var operation;
    var result;
    let numbers= new Array();
    operation = prompt("Choose your operation:\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division");
    if (operation === "1") {
        n = prompt("How many numbers do you want to add?");
        for (let i = 0; i < parseInt(n); i++) {
            numbers[i] = prompt("Enter value " + (i + 1));
        }
        addition(numbers);
    
    } 
    else if(operation === "2") {
        first = prompt("Enter the first number:");
        second = prompt("Enter the second number:");
        subtraction(first,second);
    } 
    else if(operation === "3") {
        n = prompt("How many numbers do you want to multiply?");
        for (let i = 0; i < parseInt(n); i++) {
            numbers[i] = prompt("Enter value " + (i + 1));
        }
        multiplication(numbers);
    } 
    else if(operation === "4") {
        first = prompt("Enter the first number:");
        second = prompt("Enter the second number:");
        if (second==='0'){
            console.log("Invalid input: denominator can not be 0")
        }
        else{
            division(first,second);
        }
       
    }
})();