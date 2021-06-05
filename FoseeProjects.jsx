import React from "react";
import Np from "./images/newspaper_layout.png";
import Bcover from "./images/bookcover.png";
import Blayout from "./images/book_layout.png";

function FoseeProjects() {
  return (
    <projects>
      <div className="box3" id="note">
        {" "}
        <div className="imgBx">
          <img src={Np} />
        </div>
        <div className="content"></div>
      </div>

      <div className="box2" id="note">
        {" "}
        <div className="imgBx">
          <img src={Bcover} />
        </div>
        <div className="content"></div>
      </div>

      <div className="box2" id="note">
        {" "}
        <div className="imgBx">
          <img src={Blayout} />
        </div>
        <div className="content"></div>
      </div>

      {/* <div className="box" id="note">
        {" "}
        <div className="imgBx">
          <img src={Bl} />
        </div>
        <div className="content"></div>
      </div>

      <div className="box" id="note">
        {" "}
        <div className="imgBx">
          <img src={Np} />
        </div>
        <div className="content"></div>
      </div> */}
    </projects>
  );
}

export default FoseeProjects;
