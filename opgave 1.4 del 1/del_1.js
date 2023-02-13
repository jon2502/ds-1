var encryptText = document.getElementById('encryptText');
var encryptButton = document.getElementById('encryptButton')
var encryptPrint = document.getElementById('encryptPrint')
var decryptText = document.getElementById('decryptText');
var decryptButton = document.getElementById('decryptButton')
var decryptPrint = document.getElementById('decryptPrint')
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var newString = "";
console.log(alphabet)

encryptButton.addEventListener('click', encrypt(encryptText.value, 3))

function encrypt (str, num) {
    var num = num % 26
    const lowerCaseString = str.toLowerCase();
    for (let i = 0; i<encryptText.length; i++ ){
        const currentLetter = lowerCaseString[i];
        if (currentLetter === ''){
            newsting += currentLetter;
            continue
        }
        const currentIndex = alphabet.indexOf(currentLetter)
        let newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else newString += alphabet[newIndex];
    }
    return newString
}

decryptButton.addEventListener('click', decrypt)

function decrypt () {
    for (let i = 0; i<decryptText.length; i++ ){
        
    }
    result = decryptText.value
    decryptPrint.innerHTML=`${result}`
}