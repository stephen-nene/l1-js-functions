// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function add(){
    const num1 = 19;
    const num2 = 80;
    printValue(num1 + num2)
}
add ()

//TODO: create a function that takes in two values and adds them
function addNums(n1 ,n2){
       printValue(n1 + n2)
}

addNums(3 ,4)
addNums(20, 22)
//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addNumbers(x , y){
    const sum = x + y
    return sum;
}
const summation = addNumbers(7 ,7)
printValue(summation)

// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addExpression = function(){
    printValue(20+30)
}
addExpression ()


//TODO: create a function that takes in two values and adds them


//TODO: create a function that takes in two values, adds them and returns the value of the addition


// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const addAnonymous = () =>{
    printValue(60+50)
}
addAnonymous ()

const sayHello = () => printValue("hello steve")
sayHello ()


//TODO: create a function that takes in two values and adds them


//TODO: create a function that takes in two values, adds them and returns the value of the addition


