// use DOM queries to get access to the DOM elements that you need

// link the displayDigit function to the click event of the digit buttons


//link the operationClicked function to the click even of the operation buttons


// Define the displayDigit function to be added as an event listener to the buttons representing the
// digits so that when the button is clicked the digit it represents would be concatenated
let displ = document.getElementById('display');
let opp = document.getElementsByClassName('operation');
let equal = document.getElementById('btnEqual');
let Clear = document.getElementById('btnClear');


// to the contents of the display label
let button = document.getElementsByClassName('digit');
button[0].addEventListener('click',displayDigit);
opp[0].addEventListener('click',operationClicked);
button[1].addEventListener('click',displayDigit);
opp[1].addEventListener('click',operationClicked);
button[2].addEventListener('click',displayDigit);
opp[2].addEventListener('click',operationClicked);
button[3].addEventListener('click',displayDigit);
opp[3].addEventListener('click',operationClicked);
button[4].addEventListener('click',displayDigit);
button[5].addEventListener('click',displayDigit);
button[6].addEventListener('click',displayDigit);
button[7].addEventListener('click',displayDigit);
button[8].addEventListener('click',displayDigit);
button[9].addEventListener('click',displayDigit);
equal.addEventListener('click',equalClicked);
Clear.addEventListener('click',clear);

function displayDigit(e)
{

    displ.innerHTML = displ.innerHTML+e.target.innerHTML;
}
function clear(e)
{
    displ.innerHTML='';
}


let firstValue="", secondValue="", operation;

//Define the operationClicked function to handle the click event of the operation buttons
//The function body should include the following steps:
    //Convert the value in the display label into a number and store it in the variable firstValue
    //Store the text of the clicked button in the variable 'operation' for latter reference
    //Clear the display lable to allow the user to enter the second value
let counter=0;
function operationClicked(e){
    firstValue =parseInt(displ.innerHTML);
    operation = e.target.innerHTML;
    displ.innerHTML ='';
}


// //Define the equalClicked function to handlet the click event of the equal button with the following steps
//     //Convert the value in the display label to a number and store it in the variable secondValue
//     // based on the value stored in the operation apply the corresponding operator on the first and second values
//     // and display the result in the display label.

function equalClicked(e){
    secondValue =parseInt(displ.innerHTML);
    if(operation=="+"){
    displ.innerHTML = firstValue+secondValue;
    }
    if(operation=="*"){
    displ.innerHTML = firstValue*secondValue;
    }
    if(operation=="-"){
    displ.innerHTML = firstValue-secondValue;
    }if(operation=="/"){
    displ.innerHTML = firstValue/secondValue;
    }
}
