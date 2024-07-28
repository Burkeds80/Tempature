console.log("Calculator script");
var num1 = prompt("Enter the first number");
var num2 = promt("Enter the second number2:");
var operation = prompt("Menu : 1. Sum - 2. Subs - 3. Div - 4. Mult");

console.log(num1);
console.log(num2);
console.log(operation);

if(operation==1){
    var sum=num1+num2;
    document.write(num1 + "+" + num2 + "=" + sum);
}

if(operation=="2"){
    var subs = Number(num1) - Number(num2);
    document.write(num1 + "-" + num2 + "=" +subs);
}

if(operation=="3"){
    var mult = Number(num1) * Number(num2);
    document.write(num1 + "x" + num2 + "=" +subs);
}

if(operation=="4"){
    var div = Number(num1) / Number(num2);
    document.write(num1 + "/" + num2 + "=" +subs);
}