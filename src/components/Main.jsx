import React from "react"
import "../css/Main.css"
import Intro from "./Intro"
import AboutMe from "./AboutMe"
import Projects from "./Projects"


const Main = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <Projects />
      {/*
      <Container id="contacts">
        <Paper elevation={8}/>
      </Container> */}
    </>

  )
}

export default Main