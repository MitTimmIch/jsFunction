"use strict"

function removeVowelLetters() {
    let text = document.getElementById("page__text-input").value;
    console.log(text);
    const vowelAlphabet = 'аеёоиуэюыя';
    let newText = '';
    for (let i = 0; i < text.length; i++){
        if (!vowelAlphabet.includes(text[i].toLowerCase())){
            newText +=text[i]
        }
    }
    return document.getElementById("result").innerHTML = `Результат: ${newText}`;
}

/*
console.log(removeVowelLetters('Привет друг'));*/
