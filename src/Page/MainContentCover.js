import React from "react";
import ReactPlayer from "react-player";
import "./MainContentCover.scss";

function MainContentCover(props) {
  return (
    <div id={props.id} className="Cover">
      <div className="playerWrapper">
        <ReactPlayer
          url="https://youtu.be/zrM1mcKmX_c"
          width="100%"
          height="100%"
          loop={true}
          muted={true}
          autoplay={true}
          controls={true}
        />
      </div>
    </div>
  );
}

export default MainContentCover;
