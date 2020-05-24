//Elements
const resultEl= document.getElementById("result");
const lengthEl= document.getElementById("length");
const uppercaseEl= document.getElementById("uppercase");
const lowercaseEl= document.getElementById("lowercase");
const numberEl= document.getElementById("number");
const symbolsEl= document.getElementById("symbols");
const generateEl= document.getElementById("generate");

//Events
generateEl.addEventListener('click',()=>{
    const length= +lengthEl.nodeValue;
    const hasLower=lowercaseEl.checked;
    const hasUpper=uppercaseEl.checked;
    const hasNumber=numberEl.checked;
    const hasSymbols=symbolsEl.checked;
    
    resultEl.innerText=generatePassword(hasLower, hasUpper,hasNumber,hasSymbols, length);
}

//password function
function generatePassword(lower,upper,number,symbols,length){
   let  generatePassword=""

   const typesCount = lower + upper + number + symbols;

   const typesArr = [{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0]);

   if(typesCount===0){
       return"";
   }
}

const randomFun ={
    lower= getRandomLower,
    upper= getRandomUppercase,
    number= getRandomNumber,
    Symbol= getRandomSymbol
};

// generate for settings- http://www.net-comber.com/charset.html
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+97);
}
function getRandomUppercase(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()* 10)+48);
}
function getRandomSymbol(){
    const symbols="!@#$%&*(){}[]=,./<>?`~-_|^";
    return symbols[Math.floor(Math.random()* symbols.length)]
}