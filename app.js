//Part 1 of the game logic includes the fetch of a random definition and a correlated word, as well as 2 other random words.

const showDefinition = document.querySelector("definition");
const showWord = document.querySelector("words");

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

  return wordDefinition;
  };
  
const Definition = fetchDefinition();
console.log(Definition);

/* document.addEventListener("DOMContentLoaded", ) */
