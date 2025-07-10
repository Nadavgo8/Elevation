// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money



const Bank = function(){
    let _money = 500;
    const showBalance = function(){
        console.log(_money); // need "this"?
    }
    const deposit = function(sum){
        _money+=sum;
    }

    return{
        showBalance:showBalance,
        deposit:deposit,
    };

} 
const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
