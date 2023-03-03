import React from "react";
import { projects } from "../utils/projects";
import { Grid, Container, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Container>
      <Grid container id="projects">
        {projects.map((project, i) => {
          return (
            <Grid key={i} xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea><CardMedia /><CardContent><Typography>{project.name}</Typography></CardContent></CardActionArea></Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
