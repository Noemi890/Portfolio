import React from "react";
import { projects } from "../utils/projects";
import { Container, Card, CardActionArea, Typography, Grid } from "@mui/material";

const Projects = () => {
  return (
    <div id="projects">
    <Container maxWidth="md">
      <Grid container spacing={2}>
      {
        projects.map((p, i) => {
          return (
            <Grid xs={6}>
            <Card key={i}>
              <CardActionArea>
                <Typography>{p.name}</Typography>
              </CardActionArea>
            </Card>
            </Grid>
          )
        })
      }
      </Grid>
    </Container>
      </div>
  );
};

export default Projects;
