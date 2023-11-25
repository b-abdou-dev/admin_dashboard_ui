import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { NavLink } from "react-router-dom";
import React from "react";

import "./sidebar.css";
import { useState } from "react";

// Side Bar List Item component

const SideBarListItem = ({ Icon, Name, LinkPath }) => {
  const [select, setSelect] = useState("");

  const activate = () => {
    if (select === "active") {
      return "sideBarListItem active";
    } else return "sideBarListItem";
  };

  return (
    <NavLink
      to={LinkPath}
      className={({ isActive }) =>
        isActive
          ? setSelect("active") || "sideBarLink"
          : setSelect("") || "sideBarLink"
      }
    >
      <li className={`${activate()}`}>
        <Icon className="sideBarIcon" />
        {Name}
      </li>
    </NavLink>
  );
};

const sideBarItems = {
  dashBoard: [
    {
      id: "1",
      name: "Home",
      icon: LineStyleIcon,
      linkPath: "/",
    },
    {
      id: "2",
      name: "Analytics",
      icon: TimelineOutlinedIcon,
      linkPath: "/analytics",
    },
    {
      id: "3",
      name: "Sales",
      icon: TrendingUpOutlinedIcon,
      linkPath: "/sales",
    },
  ],
  quickMenu: [
    {
      id: "1",
      name: "Users",
      icon: PersonOutlineOutlinedIcon,
      linkPath: "/users",
    },
    {
      id: "2",
      name: "Products",
      icon: StorefrontOutlinedIcon,
      linkPath: "/products",
    },
    {
      id: "3",
      name: "Transactions",
      icon: PaidOutlinedIcon,
      linkPath: "/transactions",
    },
    {
      id: "4",
      name: "Reports",
      icon: AssessmentOutlinedIcon,
      linkPath: "/reports",
    },
  ],
  notifications: [
    {
      id: "1",
      name: "Email",
      icon: EmailOutlinedIcon,
      linkPath: "/email",
    },
    {
      id: "2",
      name: "Feedback",
      icon: ReplyAllOutlinedIcon,
      linkPath: "/feedback",
    },
    {
      id: "3",
      name: "Messages",
      icon: TrendingUpOutlinedIcon,
      linkPath: "/messages",
    },
  ],
  // stuff: [
  //   {
  //     id: "1",
  //     name: "Manage",
  //     icon: BusinessCenterOutlinedIcon,
  //     linkPath: "/manage",
  //   },
  //   {
  //     id: "2",
  //     name: "Analytics",
  //     icon: TimelineOutlinedIcon,
  //     linkPath: "/analytics",
  //   },
  //   {
  //     id: "3",
  //     name: "Reports",
  //     icon: SummarizeOutlinedIcon,
  //     linkPath: "/reports",
  //   },
  // ],
};

// dashboard items component
const DashBoardItems = () => {
  const items = sideBarItems.dashBoard.map((item) => (
    <SideBarListItem
      key={item.id}
      Icon={item.icon}
      Name={item.name}
      LinkPath={item.linkPath}
    />
  ));
  return <ul className="sideBarList">{items}</ul>;
};
const QuickMenuItems = () => {
  const items = sideBarItems.quickMenu.map((item) => (
    <SideBarListItem
      key={item.id}
      Icon={item.icon}
      Name={item.name}
      LinkPath={item.linkPath}
    />
  ));
  return <ul className="sideBarList">{items}</ul>;
};

const NotificationsItems = () => {
  const items = sideBarItems.notifications.map((item) => (
    <SideBarListItem
      key={item.id}
      Icon={item.icon}
      Name={item.name}
      LinkPath={item.linkPath}
    />
  ));
  return <ul className="sideBarList">{items}</ul>;
};
// const StuffItems = () => {
//   const items = sideBarItems.stuff.map((item) => (
//     <SideBarListItem
//       key={item.id}
//       Icon={item.icon}
//       Name={item.name}
//       LinkPath={item.linkPath}
//     />
//   ));
//   return <ul className="sideBarList">{items}</ul>;
// };

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          {/* activeClassName="active" */}
          {/* <ul className="sideBarList">
            <NavLink
              to="/"
              className="sideBarLink"
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              <li className="sideBarListItem">
                <LineStyleIcon />
                Home
              </li>
            </NavLink>
          </ul> */}

          <DashBoardItems />
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <QuickMenuItems />
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <NotificationsItems />
        </div>
        {/* <div className="sideBarMenu">
          <h3 className="sideBarTitle">Stuff</h3>
          <StuffItems />
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
