import React from "react";
import "../components/Nav.css";
import { IconButton, Avatar, Typography, Divider } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
function Nav() {
  return (
    <>
      <div className="bar">
        <div className="leftBar">
          <IconButton>
            <BusinessOutlinedIcon />
          </IconButton>

          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
          {/* <IconButton>
          <PollOutlinedIcon />
          <h3 className="head">Boards</h3>
        </IconButton> */}
          <form className="forms">
            <input type="text" placeholder="search" />
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
          </form>
        </div>
        <div className="middle">
          <IconButton>
            <PollOutlinedIcon />
          </IconButton>
          <h1>Trello</h1>
        </div>
        <div className="rightBar">
          <IconButton>
            <AddSharpIcon />
          </IconButton>
          <IconButton>
            <ErrorOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <Avatar src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" />
        </div>
      </div>

      <div className="bar_2">
        <div className="leftbar">
          <IconButton>
            <StarBorderRoundedIcon />
          </IconButton>

          <h3>Kanban Board</h3>

          <IconButton>
            <StarBorderRoundedIcon className="star" />
          </IconButton>

          <IconButton>
            <Typography>Acme Inc.</Typography>
          </IconButton>

          <Avatar src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" />
          <IconButton>
            <Typography>12+</Typography>
          </IconButton>

          <IconButton>
            <Typography>Invite</Typography>
          </IconButton>
        </div>
        <div className="rightbar">
          <IconButton>
            <MoreHorizIcon />
            <h1 className="show">Show Menu</h1>
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Nav;
