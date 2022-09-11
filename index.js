const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const special_character = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passBtn = document.getElementById("pass-btn")
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

let lengthInput = document.getElementById("length-input")

let lowercaseInput = document.getElementById("lowercase-input")
let uppercaseInput = document.getElementById("uppercase-input")
let numberInput = document.getElementById("numbers-input")
let specialCharInput = document.getElementById("special-characters-input")

let passArray = [passOne, passTwo]
let passContainer = document.querySelector(".pass-container")
let warningMessage = document.querySelector(".warning")

passBtn.addEventListener("click", generatePassword)

function generatePassword() {
	let passLength = lengthInput.value
	let charset = generateArray()
	if (charset.length === 0) {
		passContainer.style.visibility = "hidden"
		warningMessage.style.display = "block"
	} else {
		for (let j = 0; j < passArray.length; j++) {
			let passwd = ""
			for (let i = 0; i < passLength; i++) {
				randomIndex = Math.floor(Math.random() * charset.length)
				passwd += charset[randomIndex]
			}
			passArray[j].textContent = passwd
		}
		passContainer.style.visibility = "visible"
		warningMessage.style.display = "none"
	}
}

function generateArray() {
	let charArray = []
	if (lowercaseInput.checked === true) {
		charArray.push(lowercase)
	}
	if (uppercaseInput.checked === true) {
		charArray.push(uppercase)
	}
	if (numberInput.checked === true) {
		charArray.push(numbers)
	}
	if (specialCharInput.checked === true) {
		charArray.push(special_character)
	}
	return (charArray.flat())
}

passOne.addEventListener("click", copyToClipboard)
passTwo.addEventListener("click", copyToClipboard)

function copyToClipboard(evt) {
	navigator.clipboard.writeText(evt.target.textContent).then(() => {
		if (evt.target.textContent != "") {
			alert("Copied to clipboard")
		}
	})
}