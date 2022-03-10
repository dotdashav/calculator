const screenNumbers = document.querySelector('.display');
const buttonsNumber = Array.from(document.querySelectorAll(".number"));
const buttonsOperator = Array.from(document.querySelectorAll(".operator"));
const buttonsOperation = [...buttonsNumber, ...buttonsOperator];
const buttonsClear = document.querySelector(".clear");
const buttonResult = document.querySelector(".result");
const buttonDelete= document.querySelector(".delete"); 

let selection = [];
let screenDisplay;
let lastInput = `${(selection[selection.length - 1])}`;
let indexSymbol; 




function display() {
    screenDisplay = selection.join("");
    screenNumbers.textContent = screenDisplay
}

function clear() {
    buttonsClear.addEventListener("click", () => {
        selection = []
        display()
    })
};

function solve() {
    let partOne = selection.slice (0, indexSymbol).join(""); 
    let partTwo= selection.slice (indexSymbol+1 ).join("");
    let numbOne = +partOne
    let numbTwo= +partTwo
    let operator = selection[indexSymbol];
    if (operator == "+" ){
        let sum = numbOne + numbTwo
        selection = []
        selection.push (sum)
        display(); 
    }
    else if (operator == "-" ){
        let substract = numbOne-numbTwo
        selection = []
        selection.push (substract)
        display(); 
    } 
    else if (operator == "x" ){
        let multiply = numbOne*numbTwo
        selection = []
        selection.push (multiply)
        display(); 
    } 
    else if (operator == "/" ){
        if (numbTwo == 0 ){ 
            selection=[]
            selection.push('Error')
            display()
            selection= []
        } else {
            let divide = numbOne/numbTwo;
             selection = []; 
             selection.push (divide)
             display(); 
    }
};
};

function clickResult (){ 
    buttonResult.addEventListener ("click", ()=> {
        solve ()
    })
}

function clickDelete (){
    buttonDelete.addEventListener("click", () => {
        selection.pop(); 
        display();
         
    }); 
}; 

function inputInfo() {
    buttonsOperation.forEach(button => {
        button.addEventListener("click", (e) => {
            let inside = e.target.innerText
            if (inside == '1' || inside == '2' || inside == '3' || inside == '4' || inside == '5' || inside == '6' || inside == '7' || inside == '8' || inside == '9' || inside == '0' ) {
                let inputNumberOne = e.target.innerText
                selection.push(inputNumberOne)
                lastInput = (selection[selection.length - 1]);
                display()
            } else {
                if ((lastInput == "+" || lastInput == "-" || lastInput == "/" || lastInput == "x")) {
                    inputOperator = e.target.innerText
                    selection.pop();
                    selection.push(inputOperator);
                    lastInput = (selection[selection.length - 1]);
                    indexSymbol= selection.length - 1
                    display()
                } else if (selection.includes('+') || selection.includes('-') || selection.includes('/') || selection.includes('x')) {
                    solve()
                    inputOperator = e.target.innerText
                    selection.push(inputOperator)
                    lastInput = (selection[selection.length - 1]);
                    indexSymbol= selection.length - 1
                    display()
                } else {
                    inputOperator = e.target.innerText
                    selection.push(inputOperator)
                    lastInput = (selection[selection.length - 1]);
                    indexSymbol= selection.length - 1
                    display()

                }
            }
        })
    })
}


inputInfo();
clear();
clickResult();
clickDelete();