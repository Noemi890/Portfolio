import React from "react";
import "../css/NavBar.css";
import { IconButton, Tooltip } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import NotesIcon from "@mui/icons-material/Notes";
import ContactsIcon from "@mui/icons-material/Contacts";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const NavBar = ({ theme, changeThemeOnClick }) => {
  return (
    <nav className="navBar">
      <div className="icons_container">
        <Tooltip title='About Me' placement="top">
        <a href="#about_me">
          <IconButton>
            <NotesIcon />
          </IconButton>
        </a>
        </Tooltip>
        <Tooltip title='Projects' placement="top">
        <a href="#projects">
          <IconButton>
            <ComputerIcon />
          </IconButton>
        </a>
        </Tooltip>
        <Tooltip title='Contacts' placement="top">
        <a href="#contacts">
          <IconButton>
            <ContactsIcon />
          </IconButton>
        </a>
        </Tooltip>
        <Tooltip title='Change your Theme' placement="top">
        <IconButton onClick={() => changeThemeOnClick()}>
          {
            theme === 'dark' ? 
              <DarkModeIcon /> :
              <LightModeIcon />
          }
          </IconButton>
          </Tooltip>
      </div>
    </nav>
  );
};

export default NavBar;
