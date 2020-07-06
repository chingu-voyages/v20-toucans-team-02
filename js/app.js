const showDefinition = document.querySelector(".definition");
const showWord = document.querySelector(".words");
const list1 = document.querySelector(".definitions");

let win = false;
const wordArr = [];
let randomWord = "";

const fetchRandomWord = async () => {
  const random = await axios.get(
    "https://api.wordnik.com/v4/words.json/randomWord",
    {
      params: {
        api_key: "ecfgi1h25l9ial3uiqu4e201aaor7odzentfuf3ruogimb1dc",
      },
    }
  );
  wordArr.push(random.data.word);
  console.log(`3 random words: ${wordArr}`);
  return wordArr;
};

const fetchDefinition = async () => {
  const wait = await fetchRandomWord();
  randomWord = wordArr[Math.floor(Math.random() * 3)];
  const definitionURL = `https://api.wordnik.com/v4/word.json/${randomWord}/definitions`;

  const wordDefinition = await axios.get(definitionURL, {
    params: {
      api_key: "ecfgi1h25l9ial3uiqu4e201aaor7odzentfuf3ruogimb1dc",
    },
  });
  return {
    word: randomWord,
    definitions: wordDefinition.data.map((x) => x.text),
  };
};

const game = () => {
  for (let i = 0; i < 2; i++) {
    fetchRandomWord();
  }

  const definition = fetchDefinition().then((definitions) => {
    definitions.definitions.forEach((el) => {
      let elem = document.createElement("li");
      elem.classList.add("definition");
      elem.innerHTML = el;
      list1.appendChild(elem);
    });
  });

  const word = fetchRandomWord().then((wordsArr) => {
    wordsArr.forEach((el) => {
      console.log(wordsArr);
      let elem = document.createElement("li");
      elem.classList.add("wordsItem", "pointer");
      elem.innerHTML = el;
      elem.addEventListener("click", () => {
        if (el === randomWord) {
          elem.innerHTML = `${el} <br> That's right!`;
          elem.classList.add("win");
          elem.classList.remove("wordsItem");
          win = true;
          let restart = document.createElement("li");
          restart.classList.add("win", "pointer");
          restart.innerHTML = `Play again?`;
          elem.insertAdjacentElement("afterend", restart);
          restart.addEventListener("click", () => {
            location.reload();
          });
        } else {
          if (win === false) {
            console.log("wrong");
            elem.innerHTML = `${el} That's not correct, Try again!`;
          }
        }
      });
      showWord.appendChild(elem);
    });
  });
};

game();