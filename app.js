//Part 1 of the game logic includes the fetch of a random definition and a correlated word, as well as 2 other random words.
const showDefinition = document.querySelector(".definition");
const showWord = document.querySelector(".words");
const list1 = document.querySelector(".definitions");

const wordArr = [];

const fetchRandomWord = async () => {
  //todo Here must be the for 3 times loop???
  const random = await axios.get(
    "http://api.wordnik.com/v4/words.json/randomWord",
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
  const randomWord = wordArr[Math.floor(Math.random() * 3)];
  const definitionURL = `http://api.wordnik.com/v4/word.json/${randomWord}/definitions`;

  const wordDefinition = await axios.get(definitionURL, {
    params: {
      api_key: "ecfgi1h25l9ial3uiqu4e201aaor7odzentfuf3ruogimb1dc",
    },
  });
  console.log(`Chosen random word: ${randomWord}`);
  return {
    word: randomWord,
    definitions: wordDefinition.data.map((x) => x.text),
  };
};

/*  */

/* const word = fetchRandomWord().then((wordsArr) => {
  wordsArr.forEach((el) => {
    let elem = document.createElement("li");
    elem.classList.add("definition");
    elem.innerHTML = el;
    showWord.appendChild(elem);
  });
}); */

const game = () => {
  for (let i = 0; i < 2; i++) {
    fetchRandomWord();
    console.log(i);
  }
  const definition = fetchDefinition().then((definitions) => {
    definitions.definitions.forEach((el) => {
      let elem = document.createElement("li");
      elem.classList.add("definition");
      elem.innerHTML = el;
      list1.appendChild(elem);
    });
  });
};

game();
