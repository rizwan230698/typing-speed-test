import React from "react";
import "./Speaker.css";

const Speaker = props => {
  const { sound, setSound } = props;
  return (
    <div className="speaker">
      <img
        onClick={setSound}
        src="https://image.flaticon.com/icons/svg/679/679691.svg"
        alt="speaker"
      />
      <div
        className="hideImage"
        style={{ backgroundColor: sound ? "transparent" : "white" }}
      />
    </div>
  );
};
export default Speaker;
