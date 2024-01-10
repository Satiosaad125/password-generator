const characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","&","*",";","<",">","?",
"/"];
let firstBox = document.getElementById("first-box")
let secondBox = document.getElementById("second-box")
let passwordLength = 10

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function getSecondRandomChar() {
    let randomCharTwo = Math.floor(Math.random() * characters.length)
    return characters[randomCharTwo]
}

function generateRandomPassword() {
    let randomPassword = ""
    let secondRandomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
        secondRandomPassword += getSecondRandomChar() 
        firstBox.textContent = randomPassword
        secondBox.textContent = secondRandomPassword       
    }
    return randomPassword
}

