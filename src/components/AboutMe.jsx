import React from "react";
import {
  Container,
  Typography,
  Divider,
} from "@mui/material";

const AboutMe = () => {
  return (
    <div id="about_me_anchor">
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
            . So, about a year ago I decided to change my life for the better. I
            quit my job and took on an intensive full-time course to improve my
            skills and take on new programming languages that I didn't even
            understand at the beginning, such as{" "}
            <u>
              <b>Javascript</b>
            </u>{" "}
            and{" "}
            <u>
              <b>React</b>
            </u>
            .
          </Typography>
          <Typography variant="h5" gutterBottom mb={2}>
            I have a specific passion for <em>front-end</em> but I've also took
            on some
            <em>back-end</em> skills during the Bootcamp, such as{" "}
            <u>
              <b>MySQL</b>
            </u>
            ,{" "}
            <u>
              <b>Express.js</b>
            </u>{" "}
            and{" "}
            <u>
              <b>Prisma</b>
            </u>
            .
          </Typography>
          <Divider variant="middle" />
          <Typography
            className="gaming_section"
            variant="h5"
            gutterBottom
            mt={2}
          >
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
            Also, I enjoy reading{" "}
            <span role="img" aria-label="book">
              📖
            </span>{" "}
            and painting{" "}
            <span role="img" aria-label="painter">
              👩‍🎨
            </span>
            .
          </Typography>
          <Typography variant="body1" gutterBottom>

          </Typography>
      </Container>
    </div>
  )
}

export default AboutMe