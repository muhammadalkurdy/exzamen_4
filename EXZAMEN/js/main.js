const conteinerEl = document.querySelector(".conteiner");
const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#input");
const searchEl = document.querySelector("#search");
const faktEl = document.querySelector("#fakt");
const h2El = document.querySelector("#text_one");
const p1El = document.querySelector("#text_two");
const p2El = document.querySelector("#text_there");
const p3El = document.querySelector("#text_four");
const p4El = document.querySelector("#text_five");
const Elmp3 = document.querySelector("#audio");


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputEl.value}`)
        .then((data) => data.json())
        .then((user) => {
            user.forEach((element) => {
                p1El.innerHTML = `${element.word} - ${element.phonetic}`
                p2El.innerHTML = element.meanings[1].definitions[0].example;
                h2El.innerHTML = element.meanings[0].definitions[0].definition;
                p3El.innerHTML = element.meanings[1].definitions[0].definition;
                p4El.innerHTML = element.meanings[2].definitions[0].definition;
                Elmp3.setAttribute("controls", "")
                Elmp3.src = element.phonetics[0].audio;
                console.log(element);
            });
        });
    inputEl.value = "";
});