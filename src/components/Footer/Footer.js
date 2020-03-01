import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__tips">
        <ul>
          <h4>Tip!</h4>
          <li>
            Word Per Minute (WPM) is measured by calculating how many words you
            can type in 1 minute.
          </li>
          <li>
            Character Per Minute (CPM) calculates how many characters are typed
            per minute.
          </li>
          <li>
            The top typing speed was achieved by Stella Pajunas in 1946, whereas
            Mrs. Barbara Blackburn has averaged 150 wpm in 50 minutes and her
            top speed was 212 wpm.
          </li>
        </ul>
      </div>
      <div className="footer__speed-meassure">
        <h4>Average typing speed</h4>
        <div className="measure">
          <div className="slow">0-20 Slow</div>
          <div className="avg">20-40 Average</div>
          <div className="fast">40-60 Fast</div>
          <div className="pro">60-80 Profressional</div>
          <div className="top">80-100 Top</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
