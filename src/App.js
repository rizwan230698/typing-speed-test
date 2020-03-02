import React, { useState, useCallback } from "react";
import axios from "axios";
import "./App.css";
import Details from "./components/details/Details";
import Preview from "./components/Preview/Preview";
import Footer from "./components/Footer/Footer";
import Speaker from "./components/speaker/Speaker";

function App() {
  const [quote, setQuote] = useState({});
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState(0);
  const [writtenWords, setWrittenWords] = useState(0);
  const [sound, setSound] = useState(true);

  const fetchQuote = useCallback(async () => {
    const response = await axios.get("http://api.quotable.io/random");
    setQuote(response.data);
  }, []);

  const reset = useCallback(() => {
    setQuote([]);
    setInput("");
    setErrors(0);
    document
      .querySelector(".preview__quote")
      .classList.remove("preview__quote--active");
    document.querySelector(".preview__output").innerHTML = "";
  }, []);

  const updateError = useCallback(() => {
    setErrors(prevState => prevState + 1);
  }, []);

  const updateWrittenWords = useCallback((totalWords, leftWords) => {
    setWrittenWords(totalWords - leftWords);
  }, []);

  const handleInput = useCallback(event => {
    const { key, keyCode } = event;
    if (
      (keyCode >= 65 && keyCode <= 90) ||
      keyCode === 32 ||
      keyCode === 190 ||
      keyCode === 188 ||
      keyCode === 222 ||
      keyCode === 186 ||
      keyCode === 49
    ) {
      setInput(prevState => prevState + key);
    }
  }, []);

  return (
    <div className="App">
      <Details quote={quote} errors={errors} writtenWords={writtenWords} />
      <Preview
        fetchQuote={fetchQuote}
        quote={quote}
        reset={reset}
        input={input}
        handleInput={handleInput}
        updateError={updateError}
        updateWrittenWords={updateWrittenWords}
        sound={sound}
      />
      <Footer />
      <Speaker
        setSound={() => setSound(prevState => !prevState)}
        sound={sound}
      />
    </div>
  );
}

export default App;
