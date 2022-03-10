const screenNumbers = document.querySelector('.display');
const buttonsNumber = Array.from(document.querySelectorAll(".number"));
const buttonsOperator = Array.from(document.querySelectorAll(".operator"));
const buttonsOperation = [...buttonsNumber, ...buttonsOperator];


let selection = []; 
let screenDisplay;

function display() {
    screenDisplay = selection.join("");
    screenNumbers.textContent = screenDisplay
}

function inputInfo () {
    buttonsOperation.forEach(button => {
        button.addEventListener("click", (e) => {
            let inside = e.target.innerText
            if ( inside == '1' || inside == '2' || inside == '3' || inside == '4' || inside == '5'||  inside == '6 ' || inside == '7' || inside == '9' || inside == '10' || inside == '11'){
                let inputNumberOne = e.target.innerText
                selection.push(inputNumberOne)
                display()
                
            } else {
                let inputOperator = e.target.innerText
                selection.push(inputOperator)
                display()
                
            }
        })
    })
}


inputInfo();
