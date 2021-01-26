function Withdraw(amount,value)
{  
    if (amount<value){
        console.log("Insufficent balance"); 
    }
    else{
        amount -= value
        console.log("Your account has been debited with ETB " + value +". Your current balance is ETB " + amount);
    }
    return amount
}
function Deposit(amount,value)
{ 
    amount += value
    console.log("Your account has been credited with ETB " + value +". Your current balance is ETB " + amount);
    return amount
}
function Balance(amount)
{
    console.log("Your current balance is ETB " + amount);

}
function Transfer(amount,value,account)
{
    amount -=value
    console.log("You have transferred ETB " + value +" to "+ account +". Your current balance is ETB " + amount);
    return amount
}



(function() {
    
    var amount= 0;
    var continueOp=true;
    while(continueOp===true){
    operation = prompt("Choose your operation:\n1.Withdraw\n2.Deposit\n3.Balance\n4.Transfer\n5.Quit");
    if (operation === "1") {
        n = parseInt(prompt("How much do you want to withdraw?"));
        if(n<100){
            console.log("The amount is too small!")
        }
        else if(n>4000){
            console.log("The amount is too big!")
        }
        else{
            amount=Withdraw(amount,n)  
        }      
    } 

    else if(operation === "2") {
        n =parseInt(prompt("How much do you want to deposit?"));
        amount=Deposit(amount,n)  
    } 

    else if(operation === "3") {
        Balance(amount)
    } 

    else if(operation === "4") {
        value = parseInt(prompt("How much money do you want to transfer?"));
        account = prompt("whose account do you want to transfer to?");
        amount=Transfer(amount,value,account)
    }
    else{
        continueOp=false
    }
}
})();


