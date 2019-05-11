import user1 from "../../images/user1.png"
import user2 from "../../images/user2.png"
import user3 from "../../images/user3.png"
import user4 from "../../images/user4.png"
import user5 from "../../images/user5.png"
import user6 from "../../images/user6.png"

export const mockData = [
  {
    userId: Date.now() - Math.random() * Math.random(),
    bio: "A badass developer that wanna marry on time",
    company: "Test Company",
    facebook: "@Adebalanced02",
    firstName: "Bola",
    instagram: "balanced",
    lastName: "Ahmed",
    location: "Abuja, NG",
    otherCraftsSelect: [
      {
        text: "UI/UX",
        key: Date.now() - Math.random() * Math.random()
      }
    ],
    status: "UX Research",
    twitter: "@balanced02",
    website: "www.digitalexplorers.com",
    youtube: "@balanced",
    picture: user1,
    connected: true,
  },
  {
    userId: Date.now() - Math.random() * Math.random(),
    bio: "A badass developer that wanna marry on time",
    company: "Test Company",
    facebook: "@Adebalanced02",
    firstName: "Abiodul",
    instagram: "balanced",
    lastName: "Abdulkarid",
    location: "Abuja, NG",
    otherCraftsSelect: [
      {
        text: "UI/UX",
        key: Date.now() - Math.random() * Math.random()
      }
    ],
    status: "UX Research",
    twitter: "@balanced02",
    website: "www.digitalexplorers.com",
    youtube: "@balanced",
    picture: user2
  },
  {
    bio: "A guy living his best life",
    company: "Telesoftas",
    facebook: "@gman",
    firstName: "Amarachi",
    instagram: "Godsman",
    lastName: "Adepoju",
    location: "Lagos, NG",
    otherCraftsSelect: [
      {
        text: "UI/UX",
        key: Date.now() - Math.random() * Math.random()
      }
    ],
    status: "UX Research",
    twitter: "@balanced02",
    website: "www.digitalexplorers.com",
    youtube: "@gman",
    picture: user3
  },
  {
    bio: "A girl living her best life",
    company: "Telesoftas",
    facebook: "@chichi",
    firstName: "Henry",
    instagram: "balancer",
    lastName: "Samuel",
    location: "Abuja, NG",
    otherCraftsSelect: [
      {
        text: "UI/UX",
        key: Date.now() - Math.random() * Math.random()
      }
    ],
    status: "Web development",
    twitter: "@balanced02",
    website: "www.digitalexplorers.com",
    youtube: "@balanced",
    picture: user4
  },
  {
    bio: "A girl living her best life",
    company: "Telesoftas",
    facebook: "@chichi",
    firstName: "Shade",
    instagram: "okorie",
    lastName: "Eche",
    location: "Abuja, NG",
    otherCraftsSelect: [
      {
        text: "UI/UX",
        key: Date.now() - Math.random() * Math.random()
      },
      {
        text: "Quality Assurance",
        key: Date.now() - Math.random() * Math.random()
      },
      {
        text: "Business Development",
        key: Date.now() - Math.random() * Math.random()
      }
    ],
    status: "Algorithms",
    twitter: "@balanced02",
    website: "www.digitalexplorers.com",
    youtube: "@balanced",
    picture: user5,
    connected: true
  }
];
