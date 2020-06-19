const showDefinition = document.querySelector("definition");
const showWord = document.querySelector("words");

//This function gets a random word from wordnik.
const fetchRandomWord = async () => {
  const random = await axios.get(
    "http://api.wordnik.com/v4/words.json/randomWord",
    {
      params: {
        api_key: "a",
      },
    }
  );
  return random.data.word;
};

const fetchDefinition = async () => {
  const randomWord = await fetchRandomWord();
  console.log(randomWord);
  const definitionURL = `http://api.wordnik.com/v4/word.json/${randomWord}/definitions`;

  const wordDefinition = await axios.get(definitionURL, {
    params: {
      api_key: "a",
    },
  });

  return {
    word: randomWord,
    definitions: wordDefinition.data.map((x) => x.text),
  };
};

const Definition = fetchDefinition().then((definitions) => {
  console.log(definitions.definitions[0]);
});
