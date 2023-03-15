import cohort_manager_logo from "./cohort_manager_logo.png"
import cohort_manager_video from "./cohort_manager.mp4"
import play_nation_logo from "./play_nation_logo.png"
import play_nation_video from "./play_nation.mp4"
import roleplay_logo from "./roleplay_logo.png"

export const projects = [
  {
    name: 'Cohort Manager 2.0',
    intro: 'A Software developed with my peers during the Boolean Boot camp.',
    description: 'A web-based learning management system where teachers and admins can manage courses and users while allowing interactions among students and teachers by implementing a post area.',
    img: cohort_manager_logo,
    video: cohort_manager_video,
    repo: ['https://github.com/Noemi890/team-dev-client-c6', 'https://github.com/Noemi890/team-dev-server-c6'],
    liveApp: 'https://cohort-manager-client.onrender.com/',
    credentials: ['Email: teacher@teacher.com', 'Password: 123']
  },
  {
    name: 'PlayNation',
    intro: 'A simple serverless application, made with mock data using a JSON file, to improve my skills using React, JavaScript, CSS and Tailwind.',
    description: 'A Website that allows the User, through a list of games, to choose the game he is interested in and have more information about it, with the possibility to be redirected to the game website.',
    img: play_nation_logo,
    video: play_nation_video,
    repo: 'https://github.com/Noemi890/play_nation',
    liveApp: 'https://playnation.netlify.app/',
    credentials: null
  },
  {
    name: 'RolePlay',
    intro: "A text-based 'social media like' RPG developed during my final weeks at Boolean.",
    description: 'It allows the User to create an account and with the same email have multiple characters. Each character can participate in one Game, posting stories based on that specific game and play with other characters.',
    img: roleplay_logo,
    video: null,
    repo: 'https://github.com/Noemi890/Roleplay_RPG-Text-based',
    liveApp: null,
    credentials: null
  },
  {
    name: 'order-dash',
    intro: 'A Software developed for a pub owner friend who wanted an ordering system',
    description: 'A web-based order management system, aimed to restaurants/pubs owners/employees. Whithin the app, as an owner, you can customize your menu and create tables based on a numeric system or names. As a user, you can take orders from a specific created table, adding menu items on it. At the checkout, it allows the user to checkout just some items or all the table, giving the exact amount to be paid.',
    img: '',
    video: null,
    repo: 'https://github.com/Noemi890/order-dash',
    liveApp: null,
    credentials: null
  }
]

export const projectSkeleton = {
  name: '',
  intro: '',
  description: '',
  img: '',
  video: '',
  repo: [],
  liveApp: '',
  credentials: []
}

export const contactFormSkeleton = {
  user_email: "",
  user_name: "",
  user_message: ""
}