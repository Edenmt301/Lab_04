function Withdraw(amount,value)
{  
    if (amount<value){
        console.log("Insufficent balance"); 
    }
    else{
        amount -= value
    }
}
function Deposit(amount,value)
{
    amount += value

}
function Balance(amount)
{
    console.log(amount);

}
function Transfer(amount,value,account)
{
    amount -=value
}



(function() {

    var amount=0;
   
    operation = prompt("Choose your operation:\n1.Withdraw\n2.Deposit\n3.Balance\n4.Transfer");
    if (operation === "1") {
        n = parseInt(prompt("How much do you want to withdraw?"));
        if(n<100){
            console.log("The amount is too small!")
        }
        else if(n>4000){
            console.log("The amount is too big!")
        }
        else{
            Withdraw(amount,n)  
        }      
    } 

    else if(operation === "2") {
        n =parseInt(prompt("How much do you want to deposit?"));
        Deposit(amount,n)  
    } 

    else if(operation === "3") {
        Balance(amount)
    } 

    else if(operation === "4") {
        value = parseInt(prompt("How much money do you want to transfer?"));
        account = prompt("whose account do you want to transfer to?");
        Transfer(amount,value,account)
    }
})();


