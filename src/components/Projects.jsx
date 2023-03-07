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
  DialogContent,
  DialogContentText,
  Divider,
  Skeleton,
  DialogActions,
  Button,
  Tooltip,
} from "@mui/material";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState({ ...projectSkeleton });

  const handleClick = (project) => {
    setProject({ ...project });
    setIsOpen(true);
  };

  const handleClose = () => {
    setProject({ ...projectSkeleton });
    setIsOpen(false);
  };

  const handleRepoClick = () => {};

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose} scroll="body">
        <DialogTitle>{project.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{project.intro}</DialogContentText>
          <Divider sx={{ marginTop: "20px", marginBottom: "20px"}}/>
          <DialogContentText sx={{ marginBottom: "20px"}}>{project.description}</DialogContentText>
          {project.video !== null ? (
            <iframe
              className="iFrame_dialog"
              width="100%"
              height="300px"
              title={`video of ${project.name}`}
              src={project.video}
            ></iframe>
          ) : (
            <>
              <Skeleton variant="rectangular" width="100%" height="300px" />
              <DialogContentText sx={{ textAlign: "center" }}>
                Video coming soon!
              </DialogContentText>
            </>
          )}
          {/* {project.credentials !== null ? (
            <>
              <DialogContentText>
                To use the app you will need credentials:
              </DialogContentText>
              {project.credentials.map((c, i) => {
                return (
                  <DialogContentText key={i}>{c}</DialogContentText>
                )
              })}
            </>
          )
          : <></>} */}
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {project.liveApp !== null ? (
              <a
                href={project.liveApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>live App</Button>
              </a>
            ) : (
              <Tooltip title="Coming soon" placement="top">
                <Button>live App</Button>
              </Tooltip>
            )}

            <Button onClick={handleRepoClick}>Repository</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <div id="projects">
        <Typography variant="h3">Projects</Typography>
        <Container maxWidth="lg">
          {projects.map((p, i) => {
            return (
              <Grid key={i}>
                <StyledCard onClick={() => handleClick(p)}>
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
          <Typography variant="h5">More projects incoming..</Typography>
        </Container>
      </div>
    </>
  );
};

export default Projects;
