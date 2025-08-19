import type { Data } from './types';

export const data: Data = {
  personal: {
    name: "Tim Kuessner",
    title: "Hey, I'm Tim, and I'm always looking for opportunities to learn new things, be creative, and challenge myself.",
    description: "Student passionate about mathematics and problem-solving.",
    tags: ["Student", "Mathematics", "Problem Solving", "Programming"],
  },

  education: [
    {
      title: "Nayland College",
      tags: ["Nelson, New Zealand", "July 2024 - December 2025"],
      bigTags: [],
      text: "Currently studying at Nayland College in Nelson, New Zealand as an exchange student. Completing the NCEA qualification and finishing high school before starting university in Europe.",
      link: "https://nayland.school.nz"
    },
    {
      title: "Gymnasium Oberwil",
      tags: ["Oberwil, Switzerland", "July 2023 - June 2024"],
      bigTags: [],
      text: "Attended Gymnasium Oberwil for advanced secondary education, focusing on Schwerpunktfach Anwendungen der Mathematik und Physik (Main focus: Applications of Mathematics and Physics).",
      link: "https://www.gymoberwil.ch"
    },
    {
      title: "Sekundarschule Therwil",
      tags: ["Therwil, Switzerland", "July 2020 - June 2023"],
      bigTags: [],
      text: "Completed secondary education at Sekundarschule Therwil in the Leistungszug P (advanced performance track).",
      link: "https://www.sektherwil.ch"
    },
    {
      title: "Primarschule Therwil",
      tags: ["Therwil, Switzerland", "July 2014 - June 2020"],
      bigTags: [],
      text: "Completed primary education at Primarschule Therwil, Switzerland.",
      link: "https://www.primartherwil.ch"
    }
  ],

  competitions: [
    {
      title: "NZMO (New Zealand Mathematical Olympiad)",
      tags: ["2025", "Round 1 Completed"],
      bigTags: [],
      text: "Successfully completed Round 1 and ready for Round 2 on 5th September.",
      link: "https://www.mathsolympiad.org.nz/"
    },
    {
      title: "AMC (Australian Mathematics Competition)",
      tags: ["2025", "No Placement Yet"],
      bigTags: [],
      text: "Details coming soon",
      link: "https://amt.edu.au/amc"
    },
    {
      title: "UC Engineering Challenge",
      tags: ["2025", "No Placement Yet"],
      bigTags: [],
      text: "Details coming soon",
      link: "https://sites.google.com/view/ucengineeringchallenge?usp=sharing"
    }
  ],

  projects: [
    {
      title: "Te Reo Māori Revitalization Game",
      tags: ["Coming 2025"],
      bigTags: ["Godot", "GDScript"],
      text: "A game that makes learning and using Te Reo Māori fun and engaging while supporting its revitalization.",
      link: "https://timkuessner.itch.io/te-reo-maori-revitalization-game"
    }
  ],

  contact: {
    description: "Interested in connecting? Feel free to reach out.",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/timkuessner" },
      { name: "GitHub", url: "https://github.com/timkuessner" }
    ]
  }
};