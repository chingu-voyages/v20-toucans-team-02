const inputs = document.getElementById("dict-form").elements;
const word = inputs["word"];
const searchBtn = document.getElementById("search");
let wordDef = document.getElementById("word-def");
const dictDefList = document.getElementById("dict-definitions");
const section = document.getElementById('dictionary');

// "https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key="

const api = {
  key: "ecfgi1h25l9ial3uiqu4e201aaor7odzentfuf3ruogimb1dc",
  baseurl: "https://api.wordnik.com/v4/word.json",
};

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});

function eventListeners() {
  searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let wordValue = word.value;
    wordDef.innerHTML = wordValue;
    getDefinition(wordValue.toLowerCase());
  });

  word.addEventListener("focus", resetForm);
}

function getDefinition(qry) {
  console.log(qry);

  fetch(
    `${api.baseurl}/${qry}/definitions?limit=3&includeRelated=false&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=${api.key}`
  )
    .then((definitions) => {
      return definitions.json();
    })
    .then(displayDefinition);
}

function displayDefinition(definitions) {

  wordDef.innerHTML = word.value;
  try {
    definitions.forEach((item) => {
      let elem = document.createElement("li");
      elem.classList.add("definition", "def-dict");
      elem.innerHTML = item.text;
      dictDefList.style.color = "ffffff";
      dictDefList.appendChild(elem);
    });
  } catch {
    dictDefList.style.color = "#fe7f9c";
    dictDefList.innerHTML =
      "It seems we don't have this word in our dictionary";
  }
}

function resetForm() {
  word.value = "";
  wordDef.innerHTML = "";
  dictDefList.innerHTML = "";
  section.style.color = "ffffff";
}
