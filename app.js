//Part 1 of the game logic includes the fetch of a random definition and a correlated word, as well as 2 other random words.

const showDefinition = document.querySelector(".definition");
const showWord = document.querySelector(".words");
const list1 = document.querySelector(".definitions");
const list2 = document.querySelector(".words");

//This function gets a random word from wordnik.
const fetchRandomWord = async () => {
  const random = await axios.get(
    "http://api.wordnik.com/v4/words.json/randomWord",
    {
      params: {
        api_key: "ecfgi1h25l9ial3uiqu4e201aaor7odzentfuf3ruogimb1dc",
      },
    }
  );
  return random.data.word;
};

const fetchDefinition = async () => {
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

const definition = fetchDefinition().then((definitions) => {
  console.log(definitions.definitions);
  console.log(definitions.word);

  definitions.definitions.forEach((el) => {
    let elem = document.createElement("li");
    elem.classList.add("definition");
    elem.innerHTML = el;
    list1.appendChild(elem);
  });

  const randomPos = () => {
    const randomArr = [];
    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * 3);
      randomArr.push(random);
    }
    console.log(`randomArr: ${randomArr}`);
  };

  let elem = document.createElement("li");
  elem.classList.add("wordsItem");
  elem.innerHTML = definitions.word;
  list2.appendChild(elem);

  // create an array, with 3 random positions, then somehow change the order of append child.

  for (let i = 0; i < 2; i++) {
    fetchDefinition().then((definitions) => {
      const word = definitions.word;
      console.log(word);
      let elem = document.createElement("li");
      elem.classList.add("wordsItem");
      elem.innerHTML = word;
      list2.appendChild(elem);
    });
  }
});

fetchDefinition();
