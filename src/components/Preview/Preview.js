import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";

import "./Preview.css";

const Preview = props => {
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
        <PlayCircleFilledWhiteOutlinedIcon style={{ fontSize: "30px" }} />
        <RefreshOutlinedIcon style={{ fontSize: "30px" }} />
      </div>
      <div className="preview__main">
        <small>
          Just start typing and dont use Backslash to correct your mistakes.
          Your mistakes will be marked and shown below the writing box. Good
          luck!
        </small>

        <div className="preview__quote" />
        <div className="preview__output" />
      </div>
    </div>
  );
};

export default Preview;
