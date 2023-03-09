import { Divider, Grid } from "@mui/material";
import React from "react";
import ContactMe from "./ContactMe";
const Contacts = () => {
  return (
    <div id="contacts">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2 }}>
        <ContactMe />
        <Divider orientation="vertical">OR</Divider>
      </Grid>
    </div>
  );
};

export default Contacts;
