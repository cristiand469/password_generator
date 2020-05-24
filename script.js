const amount = document.getElementById('amount')
const settings = document.getElementById('settings')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const symbolsElement = document.getElementById('symbols')
const passwordDisplay = document.getElementById('password_display')

const uppercase_char_codes = fromLowToHigh(65 , 90)
const lowercase_char_codes = fromLowToHigh(97 , 122)
const symbols_char_codes = fromLowToHigh(33 , 47).concat
(fromLowToHigh(58 , 64)).concat(fromLowToHigh(91 , 96)
).concat(fromLowToHigh(123 , 126)
)



amount.addEventListener('input' , syncLengthAmount )
settings.addEventListener('submit' , e => {
    e.preventDefault()
    const uppercase = uppercaseElement.checked
    const lowercase = lowercaseElement.checked
    const symbols = symbolsElement.checked
    const password = generatePassword(length, uppercase, lowercase, symbols)
    passwordDisplay.innerText = password
})

function generatePassword( length, uppercase, lowercase, symbols){
    let charCodes = lowercase_char_codes
    if (uppercase) charCodes = charCodes.concat(uppercase_char_codes)
    if (lowercase) charCodes = charCodes.concat(lowercase_char_codes)
    if (symbols) charCodes = charCodes.concat(symbols_char_codes)
    
    const passwordCharacters = []
    for (let i = 0; i < amount; i++){
    const characterCode = charCodes[Math.floor(Math.random()*
       charCodes.length)]
       passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function fromLowToHigh (low, high){
    for ( let i = low; i <= high; i++){
        Array.push(i)
    }
    return Array
}

function syncLengthAmount(e){
    const value = e.target.value
    length.value = value
}
