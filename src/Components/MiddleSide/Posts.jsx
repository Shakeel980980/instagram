import React, { useState } from "react";
import "./Posts.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircleIcon from "@mui/icons-material/Circle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { PostsData } from "./posts";

export const Posts = () => {
  let [dataPost] = useState(PostsData);
  return (
    <div className="main-container-content">
      {dataPost.map((curr) => {
        return (
          <div className="posts" key={curr.id}>
            <div className="post">
              <div className="post-header">
                <div className="post-name-and-logo">
                  <div className="logo">
                    <img src={curr.img} alt="missig" />
                  </div>
                  <div className="name">
                    {curr.name}
                    <span className="postedDay">
                      <CircleIcon sx={{ fontSize: "8px", color: "white" }} />{" "}
                      {curr.days}
                    </span>
                    <br />
                    <span className="subheading">{curr.official}</span>
                  </div>
                </div>
                <div className="post-three-dots">
                  <MoreHorizIcon />
                </div>
              </div>
              <div className="main-content">
                <img src={curr.img} alt={curr.name} />
              </div>
            </div>
            <div className="post-buttons">
              <div className="left-buttons">
                <FavoriteBorderIcon
                  sx={{ fontSize: "27px" }}
                  className="buttom-icons"
                />
                <ChatBubbleOutlineIcon
                  sx={{ fontSize: "27px" }}
                  className="buttom-icons"
                />
                <SendIcon sx={{ fontSize: "27px" }} className="buttom-icons" />
              </div>
              <div className="right-buttons">
                <BookmarkBorderIcon sx={{ fontSize: "27px" }} />
              </div>
            </div>
            <div className="likes">{curr.likes}</div>
            <div className="comments">
              <div className="comments-views">View all 11 comments</div>
              <div className="add-comment">
                <div className="comment-input">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Add a comment…
"
                    />
                  </form>
                </div>
                <div className="comment-impression">
                  <SentimentSatisfiedAltIcon
                    sx={{ fontSize: "15px" }}
                    className="impression-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
