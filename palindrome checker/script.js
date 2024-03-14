const userInput = document.getElementById("text-input");
const submit = document.getElementById("check-btn");
const output = document.getElementById("result");

function checkIfPalindrome(input) {
    let cleanedString = input.toLowerCase();
    cleanedString = cleanedString.replace(/[^\w\s]/g, '');
    cleanedString = cleanedString.replace(/\s+/g, '');

    for (i = 0; i < cleanedString.length; i++) {
        if (cleanedString[i] != cleanedString[cleanedString.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}

function outputText() {
    const inputVal = userInput.value;

    if (checkIfPalindrome(inputVal)) {
        output.innerHTML = `<p>${inputVal} is a palindrome.</p>`;
    } else {
        output.innerHTML = `<p>${inputVal} is NOT a palindrome.</p>`
    }
}

submit.addEventListener("click", outputText);
userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        outputText();
    }
});