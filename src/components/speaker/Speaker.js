import React from "react";
import "./Speaker.css";

const Speaker = props => {
  //https://image.flaticon.com/icons/svg/727/727321.svg <- mute
  const src = "https://image.flaticon.com/icons/svg/679/679691.svg";
  return (
    <div className="speaker">
      <img src={src} alt="speaker" />
    </div>
  );
};
export default Speaker;
