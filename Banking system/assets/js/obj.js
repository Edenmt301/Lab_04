let MyAccount = {
    amount: 0, 

    Withdraw: function(value)
{  
    if (this.amount<value){
        console.log("Insufficent balance"); 
    }
    else{
        this.amount -= value
        console.log("Your account has been debited with ETB " + value +". Your current balance is ETB " + this.amount);
    }
},
    Deposit: function(value)
{ 
    this.amount += value
    console.log("Your account has been credited with ETB " + value +". Your current balance is ETB " + this.amount);
    
},
    Balance: function()
{
    console.log("Your current balance is ETB " + this.amount);

},
    Transfer: function (value)
{
    if (this.amount<value){
        console.log("Insufficent balance"); 
    }
    else{
        this.amount -=value
        AnotherAccount.amount+=value
        console.log("You have transferred ETB " + value +" to 1234. Your current balance is ETB " + this.amount);
        console.log("Account no 1234 has a current balance of ETB " + AnotherAccount.amount );
    }

},
};
let AnotherAccount = {
    amount: 0,
};




(function() {
    
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
            MyAccount.Withdraw(n)  
        }      
    } 

    else if(operation === "2") {
        n =parseInt(prompt("How much do you want to deposit?"));
        MyAccount.Deposit(n)  
    } 

    else if(operation === "3") {
        MyAccount.Balance()
    } 

    else if(operation === "4") {
        value = parseInt(prompt("How much money do you want to transfer?"));
        account = prompt("Do you want to transfer to account number 1234?\n1.yes\n2.no");
        if (account=== "1") {
            MyAccount.Transfer(value)
        }  
    }
    else{
        continueOp=false
    }
}
})();



