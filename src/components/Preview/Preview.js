import React, { useState, useEffect, useRef } from "react";
import UIfx from "uifx";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
//import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";

import keySound from "../../sounds/typewriter-key-1.mp3";
import errorSound from "../../sounds/beep-08b.mp3";
import "./Preview.css";

const keyPressSound = new UIfx(keySound, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100
});
const errSound = new UIfx(errorSound, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100
});

const Preview = props => {
  const {
    fetchQuote,
    quote,
    reset,
    input,
    handleInput,
    updateError,
    updateWrittenWords,
    sound
  } = props;
  const [filterQuote, setFilterQuote] = useState({});
  const preview = useRef(null);

  const fetch = () => {
    if (!quote.content) {
      fetchQuote();
      document
        .querySelector(".preview__quote")
        .classList.add("preview__quote--active");

      preview.current.focus();
    }
    return;
  };

  const handleKeyDown = event => {
    event.preventDefault();
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
      handleInput(event);

      if (filterQuote.content && key === filterQuote.content[0]) {
        sound && keyPressSound.play();
        const filtered = filterQuote.content.slice(1);
        setFilterQuote({ ...filterQuote, content: filtered });
      } else if (filterQuote.content && key !== filterQuote.content[0]) {
        sound && errSound.play();
        updateError();
        setTimeout(() => {
          const spans = document.querySelectorAll(".span");
          spans[spans.length - 1].classList.add("error");
        }, 0);
      }
    }
  };

  useEffect(() => {
    setFilterQuote(quote);
  }, [quote]);

  useEffect(() => {
    if (quote.content && filterQuote.content) {
      const totalWords = quote.content.split(" ").length;
      const wordsLeft = filterQuote.content.split(" ").length;
      console.log(totalWords, wordsLeft);
      updateWrittenWords(totalWords, wordsLeft);
    }
  }, [filterQuote.content, quote.content, updateWrittenWords]);

  const createSpans = (char, i) => {
    if (!document.getElementById(`${char + i}`)) {
      const newSpan = document.createElement("span");
      newSpan.setAttribute("id", `${char + i}`);
      newSpan.setAttribute("class", "span");
      newSpan.textContent = char;
      document.querySelector(".preview__output").append(newSpan);
    }
  };
  return (
    <div className="preview">
      <div className="preview__header">
        <p>How fast is your typing?</p>
        <p>
          Click on the start button below to start the one-minute typing test
          and find out!
        </p>
      </div>
      <div className="preview__action-btn">
        <PlayCircleFilledWhiteOutlinedIcon
          style={{ fontSize: "30px" }}
          onClick={fetch}
          titleAccess="Start"
        />
        <RefreshOutlinedIcon
          style={{ fontSize: "30px" }}
          onClick={reset}
          titleAccess="Restart"
        />
      </div>
      <div className="preview__main">
        <small>
          Just start typing and dont use Backslash to correct your mistakes.
          Your mistakes will be marked and shown below the writing box. Good
          luck!
        </small>

        <div
          className="preview__quote"
          ref={preview}
          tabIndex="0"
          onKeyDown={quote.content && handleKeyDown}
        >
          {filterQuote.content}
        </div>
        <div className="preview__output">
          {input.split("").map(createSpans)}
        </div>
      </div>
    </div>
  );
};

export default Preview;
