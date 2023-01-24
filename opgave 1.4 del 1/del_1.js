var encryptText = document.getElementById('encryptText');
var encryptButton = document.getElementById('encryptButton')
var encryptPrint = document.getElementById('encryptPrint')
var decryptText = document.getElementById('decryptText');
var decryptButton = document.getElementById('decryptButton')
var decryptPrint = document.getElementById('decryptPrint')
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var result = "";
console.log(alphabet)

encryptButton.addEventListener('click', encrypt)

function encrypt () {
    
    for (let i = 0; i<encryptText.length; i++ ){
        var arrayEncrypt = Array.from(encryptText)
        arrayEncrypt.split('')
    }
    console.log(arrayEncrypt.split(''))
    result = encryptText.value
    encryptPrint.innerHTML = `${result}`
}

decryptButton.addEventListener('click', decrypt)

function decrypt () {
    for (let i = 0; i<decryptText.length; i++ ){
        
    }
    result = decryptText.value
    decryptPrint.innerHTML=`${result}`
}