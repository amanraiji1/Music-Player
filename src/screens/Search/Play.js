import React from "react";
import { FaForward, FaBackward } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import "./play.css";

export default function Play({ trackUri }) {
  return (
    <div className="bottom">
      <input type="range" name="range" id="myProgressBar" min="0" max="100" />
      <div>
        <FaBackward className="icons" />
        <MdPlayArrow className="icons" />
        <FaForward className="icons" />
      </div>
    </div>
  );
}
