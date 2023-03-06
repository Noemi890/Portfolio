import React from "react";
import "../css/NavBar.css";
import { IconButton, Tooltip, Container } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import StarRateIcon from '@mui/icons-material/StarRate';
import NotesIcon from "@mui/icons-material/Notes";
import ContactsIcon from "@mui/icons-material/Contacts";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const NavBar = ({ theme, changeThemeOnClick }) => {
  return (
    <Container className="navBar">
      <div className="icons_container">
        <Tooltip title='Intro' placement="top">
        <a href="#intro">
          <IconButton>
            <NotesIcon />
          </IconButton>
        </a>
        </Tooltip>
        <Tooltip title='About me' placement="top">
        <a href="#about_me">
          <IconButton>
            <StarRateIcon />
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
    </Container>
  );
};

export default NavBar;
