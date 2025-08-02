import React, { useEffect, useState } from "react";
import "./RightSide.css";
import { PostsData } from "../MiddleSide/posts";
const RightSide = () => {
  let [sugData] = useState(PostsData);
  return (
    <div className="rightside-main">
      <div className="account">
        <div className="account-img">
          <img src="/assets/developer.jpeg" alt="missing" />
        </div>
        <div className="account-detail">
          <div className="account-name">shakeelahmad7104</div>
          <div className="account-sub-name">Shakeel Ahmad</div>
        </div>
        <div className="switch">Switch</div>
      </div>
      <div className="suggested">
        <div className="suggestion-headings">
          <div className="sugg">Suggested for you</div>
          <div className="seeall">See All</div>
        </div>
        {sugData.map((curr) => {
          return (
            <div className="account" key={curr.id}>
              <div className="account-img">
                <img src={curr.img} alt={curr.name} />
              </div>
              <div className="account-detail">
                <div className="account-name">{curr.name}</div>
                <div className="account-sub-name">{curr.follow}</div>
              </div>
              <div className="switch">Follow</div>
            </div>
          );
        })}
      </div>

      <div className="right-footer">
        <div className="about">About.Pres.API.Jobs.Privacy.Terms.</div>
        <div className="locations">Locations.Language.Meta.Verified</div>
        <br />

        <div className="copyright">© 2025 Instagram from Meta</div>
      </div>
    </div>
  );
};

export default RightSide;
