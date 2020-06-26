//Part 1 of the game logic includes the fetch of a random definition and a correlated word, as well as 2 other random words.

const showDefinition = document.querySelector(".definition");
const showWord = document.querySelector(".words");
const list1 = document.querySelector(".definitions");

const wordArr = [];

const fetchRandomWord = async () => {
  const random = await axios.get(
    "http://api.wordnik.com/v4/words.json/randomWord",
    {
      params: {
        api_key: "ecfgi1h25l9ial3uiqu4e201aaor7odzentfuf3ruogimb1dc",
      },
    }
  );
  wordArr.push(random.data.word);
};

const fetchDefinition = async () => {
  const randomWord = wordArr[Math.floor(Math.random() * 3)];
  const definitionURL = `http://api.wordnik.com/v4/word.json/${randomWord}/definitions`;

  const wordDefinition = await axios.get(definitionURL, {
    params: {
      api_key: "ecfgi1h25l9ial3uiqu4e201aaor7odzentfuf3ruogimb1dc",
    },
  });
console.log(wordDefinition);
  return {
    word: randomWord,
    definitions: wordDefinition.data.map((x) => x.text),
  };
};

const game = () => {
  for (let i = 0; i < 3; i++) {
    fetchRandomWord();
  }
  fetchDefinition();
  console.log(wordArr);
  console.log("");
  return wordArr;
};

game();

/* const definition = fetchDefinition().then((definitions) => {
  const randomWord = definitions.word;

  definitions.definitions.forEach((el) => {
    let elem = document.createElement("li");
    elem.classList.add("definition");
    elem.innerHTML = el;
    list1.appendChild(elem);
  });

  let elem = document.createElement("li");
      elem.classList.add("wordsItem");
      elem.innerHTML = randomWord;
      showWord.appendChild(elem);
}); */

/*  fetchDefinition().then((definitions) => {
      const randomWord = await fetchRandomWord();
      wordArr.push(word);
      console.log(wordArr); */

/* let elem = document.createElement("li");
      elem.classList.add("wordsItem");
      elem.innerHTML = randomWord;
      showWord.appendChild(elem); */


//This function gets a random word from wordnik.
/* const fetchRandomWord = async () => {
  const random = await axios.get(
    "http://api.wordnik.com/v4/words.json/randomWord",
    {
      params: {
        api_key: "ecfgi1h25l9ial3uiqu4e201aaor7odzentfuf3ruogimb1dc",
      },
    }
  );
  return random.data.word;
}; */

/* const fetchDefinition = async () => {
  const randomWord = await fetchRandomWord();
  const definitionURL = `http://api.wordnik.com/v4/word.json/${randomWord}/definitions`;

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
*/
