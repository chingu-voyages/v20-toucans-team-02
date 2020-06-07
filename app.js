//Part 1 of the game logic includes the fetch of a random definition and a correlated word, as well as 2 other random words.

//This function gets a predefined wordlist from wordnik.
const fetchData = async () => {
  const response = await axios.get(
    "http://api.wordnik.com/v4/wordList.json/{permalink}/words", {
        params: {
            api_key: "abc",
          },
    });
};
