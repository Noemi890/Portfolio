import { Divider, Typography } from "@mui/material";
import React from "react";
import ContactMe from "./ContactMe";
import Socials from "./Social";

const Contacts = () => {
  return (
    <div id="contacts">
      <Typography variant="h3" mb={10}>
        Contact Me!
      </Typography>
      <div className="container">
        <ContactMe />
        <Divider className="divider" flexItem>OR</Divider>
        <Socials />
      </div>
    </div>
  );
};

export default Contacts;
