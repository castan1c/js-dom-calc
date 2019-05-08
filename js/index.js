//digits
const digitButton = [];
const digits = document.querySelector('.digits');
const display = document.querySelector('.display');
function addValueOnCLick(e) {
        e.preventDefault();
        display.value+=e.target.innerText;
}
for (let i = 0; i < 10; i++) {
    digitButton.push(document.createElement('button'));
    digitButton[i].textContent = i;
    digits.appendChild(digitButton[i]);
    digitButton[i].addEventListener('click',addValueOnCLick);
}
//operations
const operationButton = [];
const operationsStr = ['+', '-', '*', '/', '.'];
const operations = document.querySelector('.operations');
function addOperationOnCLick(e) {
        e.preventDefault();
        checkDisplayOperation()
            ? alert('Can not use two operators in a row') 
            : display.value += e.target.innerText;
}
function checkDisplayOperation() {
    return operationsStr.includes(display.value.charAt(display.value.length-1)); 
}
for (let i = 0; i<operationsStr.length; i++) {
    operationButton.push(document.createElement('button'));
    operationButton[i].textContent=operationsStr[i];
    operations.appendChild(operationButton[i]);
    operationButton[i].addEventListener('click', addOperationOnCLick);
}
const leftCurlButton=document.createElement('button');
const rightCurlButton=document.createElement('button');
leftCurlButton.textContent ='(';
rightCurlButton.textContent = ')';
operations.appendChild(leftCurlButton);
operations.appendChild(rightCurlButton);
leftCurlButton.addEventListener('click',addValueOnCLick);
rightCurlButton.addEventListener('click',addValueOnCLick);
//actions
const actions = document.querySelector('.actions');
//equal 
const equalButton = document.createElement('button');
equalButton.textContent = '=';
actions.appendChild(equalButton);
equalButton.addEventListener('click', equalOnclick);
function equalOnclick (e) {
    e.preventDefault();
    if(checkDisplayValue()){
    display.value=eval(display.value);
    }
}
function checkDisplayValue() {
//divide by 0    
if(display.value.includes('/'))
    if(display.value.charAt(display.value.indexOf('/')+1) === '0') {
    alert ('Can not divide by 0!');
    return false;
    }
//more then one .
    else return true;
//wrong brackets
}
//clear
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
actions.appendChild(clearButton);
clearButton.addEventListener('click',clearOnClick);
function clearOnClick (e) {
    e.preventDefault();
    display.value='0';
}
//store value
const displayStored = document.querySelector('.stored');
const storeValueButton = document.createElement('button');
storeValueButton.textContent = 'Store';
actions.appendChild(storeValueButton);
storeValueButton.addEventListener('click',storeOnClick);
function storeOnClick (e) {
    e.preventDefault();
    displayStored.value = display.value;
}
//add stored value
const fromStoreValueButton = document.createElement('button');
fromStoreValueButton.textContent = 'Get stored';
actions.appendChild(fromStoreValueButton);
fromStoreValueButton.addEventListener('click',fromStoreOnClick);
function fromStoreOnClick (e) {
    e.preventDefault();
    display.value += displayStored.value;
}
//clear stored value
const clearStoreValueButton = document.createElement('button');
clearStoreValueButton.textContent = 'Clear Stored';
actions.appendChild(clearStoreValueButton);
clearStoreValueButton.addEventListener('click',clearStoreOnClick);
function clearStoreOnClick (e) {
    e.preventDefault();
    displayStored.value = '0';
}


