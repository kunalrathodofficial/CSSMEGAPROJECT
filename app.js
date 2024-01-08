let num=20;
if(num % 10==0){
    console.log("good");
}
else{
    console.log("bad");
}

//let username=prompt("Enter your name");
//let age=prompt("Enter your age");
//alert(`${username} is ${age} years old`);


let quarter=4;

switch(quarter){
    case 1:
        console.log("January,February,March");
        break;

        case 2:
        console.log("April,May,June");
        break;
        case 3:
        console.log("July,August,September");
        break;
        case 4:
        console.log("November,December");
        break;
        default:
            console.log("Galat Hai");   
}


let string="Applea";

if(((string[0]=="A") || (string[0]=="a")) && (string.length>5)){

    console.log("golden string");
}
else{
    console.log("Not a Golden string");
}

let a=6,b=3,c=4;
if(a>b && a>c){
    console.log("Gretest number is a :",a);
}
else if(b>a&& b>c){
    console.log("Gretest number is b :",b);
}
else{
    console.log("Gretest number is c :",c);
}


let num1="32";
let num2="47854";
if(num1[num1.length-1] ==num2[num2.length-1]){
    console.log(
        `${num1} and ${num2} have the same last digit`)
}
else{
    console.log(
        `${num1} and ${num2} not have the same last digit`) 
}
