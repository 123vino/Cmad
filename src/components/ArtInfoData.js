import "./ArtInfoStyles.css";
import React from "react";

function ArtInfoData(props) {
  return (
    <div class="first-desc">
      <div class="desc-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div class="image">
        <img alt="img" src={props.img1} />
      </div>
      <div class="image">
        <img alt="img" src={props.img2} />
      </div>
      <div class="image">
        <img alt="img" src={props.img3} />
      </div>
      <div class="image">
        <img alt="img" src={props.img4} />
      </div>
    </div>
  );
}

export default ArtInfoData;
