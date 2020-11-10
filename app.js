let passwordLength = document.getElementById('length').value;
document.getElementById('length').addEventListener('change', () => {passwordLength = document.getElementById('length').value;});

const generateButton = document.getElementById('generate');

const uppercaseChecked = document.querySelector('#uppercase');
const lowercaseChecked = document.querySelector('#lowercase');
const numbersChecked = document.querySelector('#numbers');
const symbolsChecked = document.querySelector('#symbols');
const result = document.querySelector('#result');
const clipboard = document.querySelector('#clipboard');

// Generator Functions
function getRandomUppercase(){
    return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
}

function getRandomLowercase(){
    return String.fromCharCode(Math.floor((Math.random() * 26) + 97));
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor((Math.random() * 10) + 48));
}

function getRandomSymbol(){
    const symbols = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`
    return symbols[(Math.floor(Math.random() * 30))];
}


// Generates password by only calling the generateRandomCharacter functions if they are checked, and grabs a new function at each character by random
function generatePassword() {

    if (passwordLength > 20 || passwordLength <4){
        return
    }

    if (!uppercaseChecked.checked && !lowercaseChecked.checked && !numbersChecked.checked && !symbolsChecked.checked) {
        return
    }

    let password = [];
    let functions = []
    let i;
    let choice;

    if(uppercaseChecked.checked) {functions.push('RandomUppercase')};
    if(lowercaseChecked.checked) {functions.push('RandomLowercase')};
    if(numbersChecked.checked) {functions.push('RandomNumber')};
    if(symbolsChecked.checked) {functions.push('RandomSymbol')};

    for (i=0; i<passwordLength; i++){ 
       choice = functions[Math.floor(Math.random() * functions.length)];
       if (choice === 'RandomUppercase'){
        password.push(getRandomUppercase());
       } else if (choice === 'RandomLowercase'){
        password.push(getRandomLowercase());
       } else if (choice === 'RandomNumber'){
        password.push(getRandomNumber());
       } else if (choice === 'RandomSymbol'){
        password.push(getRandomSymbol());
       }
    }

    console.log(password.join(''));
    
    result.innerText = password.join('');
}
// generates new password when clicked
generateButton.addEventListener('click', generatePassword);



// Selects result text and executes a copy command
async function clipboardCopy() {
    let text = document.querySelector("#result").innerText;
    await navigator.clipboard.writeText(text);
  }

// Runs the execCopy function on click
clipboard.addEventListener('click', clipboardCopy);



