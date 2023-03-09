import React from "react";
import { useState } from "react";
import { projects } from "../utils/utils.js";
import { projectSkeleton } from "../utils/utils";
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
          <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />
          <DialogContentText sx={{ marginBottom: "20px" }}>
            {project.description}
          </DialogContentText>
          {project.video !== null ? (
            <iframe
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
          {project.credentials !== null ? (
            <DialogContentText component="div" sx={{ textAlign: "center" }}>
              To use the app you will need credentials:
              {project.credentials.map((c, i) => {
                return <Typography key={i}>{c}</Typography>;
              })}
              Please allow some time for the server to run.
            </DialogContentText>
          ) : (
            <></>
          )}
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {project.liveApp !== null ? (
              <a
                style={{ textDecoration: "none" }}
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
            {typeof project.repo !== "object" ? (
              <a
                style={{ textDecoration: "none" }}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button onClick={handleRepoClick}>Repository</Button>
              </a>
            ) : (
              <>
                {project.repo.map((r, i) => {
                  return (
                    <a
                      key={i}
                      style={{ textDecoration: "none" }}
                      href={r}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>
                        {project.repo[i].includes('server')
                          ? "Server Repo"
                          : "Client Repo"}
                      </Button>
                    </a>
                  );
                })}
              </>
            )}

            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <div id="projects">
        <Typography variant="h3">Projects</Typography>
        <Container maxWidth="lg">
          {projects.map((p, i) => {
            return (
              <Grid key={i} className="project_card">
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
