import React from "react";
import "./topbar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="top-left">
          <div className="log">
            <span className="code">Code</span>
            <span className="novel">Novel</span>
          </div>
        </div>
        <div className="top-right">
          <div className="icons">
            <div className="IconContainer">
              <NotificationsNoneOutlinedIcon style={{ fontSize: "26px" }} />
              <span className="topIconBag">2</span>
            </div>
            <div className="IconContainer">
              <LanguageIcon style={{ fontSize: "26px" }} />
              <span className="topIconBag">2</span>
            </div>
            <div className="IconContainer">
              <SettingsIcon style={{ fontSize: "26px" }} />
            </div>
            <img
              src="https://images.pexels.com/photos/12814838/pexels-photo-12814838.png?auto=compress&cs=tinysrgb&w=600"
              alt="avatar"
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
