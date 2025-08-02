import React, { useState } from "react";
import "./MiddleSide.css";
import { ParticularData } from "./particularData";
import { Posts } from "./Posts.jsx";

const MiddleSide = () => {
  let [data] = useState(ParticularData);
  return (
    <div className="middleSide">
      <div className="particular-Container">
        {data.map((curr) => {
          return (
            <div className="particular" key={curr.id}>
              <div className="particular-image">
                <img src={curr.img} alt={curr.name} />
              </div>
              <div className="particular-name">{curr.name}</div>
            </div>
          );
        })}
      </div>
      <div className="mainContent">
        <Posts />
      </div>
    </div>
  );
};

export default MiddleSide;
