import React from "react";
import "./LeftSide.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="logo-leftside">
        <img
          src="/assets/name-logo.png"
          alt="Instagram Logo"
          className="left-name-logo"
        />
        <span className="left-logo-logo nav-icons-all">
          <InstagramIcon sx={{ fontSize: 30 }} />
        </span>
      </div>

      <div className="nav-links">
        <div className="navlink">
          <span className="nav-icons-all">
            <HomeIcon sx={{ fontSize: 30 }} />
          </span>

          <span className="navlink-name">Home</span>
        </div>
        <div className="navlink">
          <span className="nav-icons-all">
            {" "}
            <SearchIcon sx={{ fontSize: 30 }} />
          </span>

          <span className="navlink-name">Search</span>
        </div>
        <div className="navlink">
          <span className="nav-icons-all">
            {" "}
            <ExploreIcon sx={{ fontSize: 30 }} />
          </span>

          <span className="navlink-name">Explore</span>
        </div>
        <div className="navlink">
          <span className="nav-icons-all">
            <SmartDisplayIcon sx={{ fontSize: 30 }} />
          </span>

          <span className="navlink-name">Reels</span>
        </div>
        <div className="navlink">
          <span className="nav-icons-all">
            {" "}
            <MessageIcon sx={{ fontSize: 30 }} />
          </span>

          <span className="navlink-name">Messages</span>
        </div>
        <div className="navlink">
          <span className="nav-icons-all">
            <FavoriteIcon sx={{ fontSize: 30 }} />
          </span>

          <span className="navlink-name">Favorites</span>
        </div>
        <div className="navlink">
          <span className="nav-icons-all">
            {" "}
            <AddIcon sx={{ fontSize: 30 }} />
          </span>

          <span className="navlink-name">Add</span>
        </div>
        <div className="navlink">
          <span className="nav-icons-all">
            <img src="/assets/developer.jpeg" alt="missing" />
          </span>

          <span className="navlink-name">Profile</span>
        </div>
        <div className="navlink">
          <span className="nav-icons-all">
            <MenuIcon sx={{ fontSize: 30 }} />
          </span>

          <span className="navlink-name">More</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
