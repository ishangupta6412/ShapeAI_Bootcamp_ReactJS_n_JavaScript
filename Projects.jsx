import React from "react";
import Mothersday from "./images/NTDSM4.1.png";
import Notobacco from "./images/noTobaccoDay3.1.png";
import Np from "./images/newspaper_layout.png";
import Bl from "./images/bookcover.png";
import md from "./images/Mothersday3.0.png";

function Projects() {
  return (
    <projects>
      <div className="box" id="note">
        {" "}
        <div className="imgBx">
          <img src={Mothersday} />
        </div>
        <div className="content"></div>
      </div>

      <div className="box" id="note">
        {" "}
        <div className="imgBx">
          <img src={Notobacco} />
        </div>
        <div className="content"></div>
      </div>

      <div className="box" id="note">
        {" "}
        <div className="imgBx">
          <img src={md} />
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

export default Projects;
