import React, { useState } from "react";
import "./App.css";

let App = () => {
  let [inputWord, setInputWord] = useState("");
  let [isPalindrome, setIsPalindrome] = useState(false);

  let checkPalindrome = () => {
    let cleanedInput = inputWord.replace(" ", "").toLowerCase();
    let reversedInput = cleanedInput.split("").reverse().join("");
    setIsPalindrome(cleanedInput === reversedInput);
  };

  return (
    <div className="container">
      <h1>Check the Palindrome App</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={inputWord}
        onChange={(event) => setInputWord(event.target.value)}
      />
      <button onClick={checkPalindrome}>Click to Check</button>
      <div className="label">
        {isPalindrome ? "It is a palindrome!" : "No it's not a palindrome."}
      </div>
    </div>
  );
};

export default App;
