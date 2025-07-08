

function greet(){
  console.log("Hello there, from the wild, wild West")
}

const greetExpression = function(){
  console.log("Uh oh")
}

const person = {
  name: "Julius",
  speak: function (food) {
    console.log(`I like ${food}`);
  },
};
console.log(person.name) //you know what this will do
// person.speak("bla") //and this? Try it out!


//ex1
function isEven(num){
    return !(num%2);
}
console.log(isEven(3));

//ex2
function printOdd(arr){
    for (const element of arr) {
        if(!isEven(element)){
            console.log(element);
        }
    }
}
printOdd([1,2,3,4,5,4,5,7,6,5]);

//ex3
function checkExists(arr,num){
    for (const e of arr){
        if(e === num){
            return true;
        }
    }
    return false;
}
console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));

//ex4
const calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a-b;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//ex5

function makeRegal(name){
   return "His Royal Highness, " + name;
}
function increaseByNameLength(money, name){
    return money * name.length;
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


//ex6
function printArmstrongNums(){
    for(let i = 100; i<=999;i++){
        const units = i % 10; 
        const tens = Math.floor((i % 100) / 10); 
        const hundreds = Math.floor(i / 100);      
        // console.log(`units: ${units}, tens: ${tens}, hundreds: ${hundreds}`)

        const sum = units ** 3 + tens ** 3 + hundreds ** 3;
        if (sum === i) {
          console.log(i + " is an Armstrong number");
        }
    }
}
printArmstrongNums();