import React from "react";
import { Container, Typography, Divider } from "@mui/material";

const AboutMe = () => {
  return (
    <div id="about_me">
      <Container maxWidth="md" className="interesting_facts_container">
        <Typography variant="h5" gutterBottom>
          I've always been interested in coding and programming languages,
          spending my free time to learn the fundamentals of{" "}
          <u>
            <b>HTML</b>
          </u>{" "}
          and{" "}
          <u>
            <b>CSS</b>
          </u>
          . About a year ago I decided to leave my job and start an intensive full-time course to improve my
          skills.
        </Typography>
        <Typography variant="h5" gutterBottom mb={2}>
          I have a specific passion for <em>front-end</em>, I am proficient with{" "}
          <b>
            <u>Javascript</u>
          </b>{" "}
          and{" "}
          <b>
            <u>React</u>
          </b>
          , as well as <em>Material UI</em> and <em>Tailwind</em>, but I've also took on some <em>back-end</em> skills, such as{" "}
          <u>
            <b>MySQL</b>
          </u>
          ,{" "}
          <u>
            <b>Express.js</b>
          </u>,{" "}
          <u>
            <b>Prisma</b>
          </u>{" "} and {" "}
          <u>
            <b>Json WebToken</b>
          </u>
          .
        </Typography>
        <Divider variant="middle" />
        <Typography className="gaming_section" variant="h5" gutterBottom mt={2}>
          When I have free time I like to spend it gaming{" "}
          <span role="img" aria-label="controller">
            🕹
          </span>
        </Typography>
        <Typography variant="h5">
          I specifically like titles such as
          <ul>
            <li>
              God of War{" "}
              <span role="img" aria-label="axe">
                🪓
              </span>
            </li>
            <li>
              Hogwarts Legacy{" "}
              <span role="img" aria-label="lightning">
                ⚡
              </span>
            </li>
            <li>
              Final Fantasy{" "}
              <span role="img" aria-label="swords">
                🗡
              </span>
            </li>
          </ul>
        </Typography>
        <Typography variant="h5" gutterBottom>
          I also enjoy reading{" "}
          <span role="img" aria-label="book">
            📖
          </span>{" "}
          and painting{" "}
          <span role="img" aria-label="painter">
            👩‍🎨
          </span>
          .
        </Typography>
        <Typography variant="body1" gutterBottom></Typography>
      </Container>
    </div>
  );
};

export default AboutMe;
