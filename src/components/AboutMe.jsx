import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const AboutMe = () => {
  return (
    <div id="about_me_anchor">
      <Container id="about_me" maxWidth="md">
        <Card className="about_me_card" raised>
          <CardContent>
            <Typography variant="h4" mb={10}>
              Hello there!{" "}
              <span role="img" aria-label="hand waving">
                👋
              </span>
            </Typography>
            <Typography variant="h6" mb={8}>
              My name is Noemi and I am a Junior Software Developer!
            </Typography>
            <Typography variant="subtitle1" mb={4}>
              I am a{" "}
              <u>
                <b>passionate</b>
              </u>{" "}
              and{" "}
              <u>
                <b>creative</b>
              </u>{" "}
              developer, always{" "}
              <u>
                <b>positive</b>
              </u>{" "}
              and{" "}
              <u>
                <b>proactive</b>
              </u>
              , with a{" "}
              <u>
                <b>great</b>
              </u>{" "}
              willigness to learn.
            </Typography>
            <Typography variant="subtitle1">
              After an intensive 6 months full-time course I am now seeking
              an opportunity to change my future and enter in the tech
              industry.
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="md" sx={{ display: "flex" }}>
        <Card className="about_me_card" raised>
          <Typography variant="subtitle1" gutterBottom>
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
          <Typography variant="subtitle1" gutterBottom mb={2}>
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
            variant="subtitle1"
            gutterBottom
            mt={2}
          >
            When I have free time I like to spend it gaming{" "}
            <span role="img" aria-label="controller">
              🕹
            </span>
          </Typography>
          <Typography>
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
          <Typography variant="body1" gutterBottom>
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
        </Card>
      </Container>
    </div>
  );
};

export default AboutMe;
