import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { Button, Container} from "@mui/material";

const Socials = () => {

  return (
    <>
    <Container sx={{ marginBottom: '150px'}}>
      <a
        target="_blank"
        href="https://github.com/Noemi890"
        rel="noopener noreferrer"
      >
        <Button sx={{ fontSize: 'x-large' }} startIcon={<GitHubIcon />}>
          See my github
        </Button>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/noemi-caggiano-19b924a4/"
        rel="noopener noreferrer"
      >
        <Button sx={{ fontSize: 'x-large' }} startIcon={<LinkedInIcon />}>
          See my linkedin
        </Button>
      </a>
      <a target="_blank"
        href={`${process.env.PUBLIC_URL}/EnzaNoemiCaggianoResume%20(2).pdf`}
        rel="noopener noreferrer">
        <Button sx={{ fontSize: 'x-large' }} startIcon={<OpenInBrowserIcon />}>
          See my CV
        </Button>
        </a>
    </Container>
    </>
  );
};

export default Socials;
