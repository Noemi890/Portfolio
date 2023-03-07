import React from "react";
import { useState } from "react";
import { projects } from "../utils/projects";
import { projectSkeleton } from "../utils/projects";
import { StyledCard } from "../utils/styledCard";
import {
  Container,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  CardContent,
  Dialog,
  DialogTitle,
} from "@mui/material";

const Projects = () => {
  const [dialogOpen, setDialogOpen] = useState({isOpen: false, content: {...projectSkeleton}});

  const handleClick = (project) => {
    setDialogOpen({isOpen: true, content: project})
  };

  const handleClose = () => {
    setDialogOpen({isOpen: false, content: {}})
  }

  

  return (
    <>
      <Dialog
        open={dialogOpen.isOpen}
        onClose={handleClose}
      >
        <DialogTitle>{dialogOpen.content.name}</DialogTitle>
      </Dialog>
      <div id="projects">
        <Typography variant="h3">Projects</Typography>
        <Container maxWidth="lg">
          {projects.map((p, i) => {
            return (
              <Grid>
                <StyledCard key={i} onClick={() => handleClick(p)}>
                  <CardActionArea sx={{ minWidth: 350 }}>
                    <CardMedia
                      component="img"
                      sx={{ objectFit: "contain" }}
                      height="140"
                      image={p.img}
                      alt={`screenshot of ${p.name}`}
                    />
                    <CardContent>
                      <Typography variant="h6">{p.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </StyledCard>
              </Grid>
            );
          })}
        </Container>
      </div>
    </>
  );
};

export default Projects;
