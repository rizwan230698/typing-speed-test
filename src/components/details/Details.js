import React from "react";
import "./Details.css";
const Details = props => {
  return (
    <div className="details">
      <div className="details__left">
        <div className="detail">
          <p>Total Words</p>
          <span>0</span>
        </div>
        <div className="detail">
          <p>Written Words</p>
          <span>0</span>
        </div>
        <div className="detail">
          <p>Errors</p>
          <span>0</span>
        </div>
        <div className="detail">
          <p>Accuracy</p>
          <span>0</span>
        </div>
      </div>
      <div className="details__right">
        <div className="detail">
          <p>Timer</p>
          <span>0</span>
        </div>
        <div className="detail">
          <p>CPM</p>
          <span>0</span>
        </div>
        <div className="detail">
          <p>WPM</p>
          <span>0</span>
        </div>
        <div className="detail">
          <p>Last WPM</p>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
export default Details;
