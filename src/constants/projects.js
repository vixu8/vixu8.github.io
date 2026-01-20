import rhythmMaker from "../assets/rhythmMakerDemo.png";
import stopdot from "../assets/stopdotDemo.png";
import cmufence from "../assets/cmuFenceDemo.png";
import spotifyGradient from "../assets/spotifyGradient.png";

// export interface Project {
//   id: number;
//   title: string;
//   startDate: string;
//   endDate?: string;
//   shortDescription: string;
//   fullDescription: string;
//   image?: any;
//   url?: string;
//   tags?: string[];
// }

export const projects = [
  {
    id: 0,
    title: "15-112 Term Project: Rhythm Maker",
    startDate: "10/2024",
    endDate: "12/2024",
    shortDescription:
      "Create, save, and play your own beatmaps for a collection of songs in Rhythm Maker!",
    // fullDescription: `A simple rhythm game coded in Python for my 15-112 term project. The professors warned us
    //                 in lecture about rhythm games, as even a bit of lag or imprecisiion could throw off the whole thing,
    //                 but by that time, I had already decided I wanted to make one.
    //                 \nI used Hatsune Miku: Colorful Stage! as inspiration for the style of the game, with notes appearing
    //                 larger as they are closer to the goal line. I decided to focus a lot more on the mechanics of the game
    //                 rather than the visuals; specifically, I used a running timer to precisely record the "spawn times" of
    //                 the notes, and create them when a map is played.
    //                 \nOverall, this was my first full coding project, and I'm mostly satisfied with how it turned out! I do
    //                 think I should have put more polish in the visuals, but I'll work on that in future projects :)`,
    image: rhythmMaker,
    url: "https://github.com/vixu8/112-term-project",
    tags: ["Python", "cmu-graphics", "Game Dev"],
  },
  {
    id: 1,
    title: "Hack112 F24: Stop-dot",
    startDate: "12/2024",
    endDate: "12/2024",
    shortDescription: "A simple platformer game engine, made in 24 hours.",
    // fullDescription: `A platformer-maker made for 15-112's Python-only hackathon, Hack112. My friend and I entered as a group
    //                 of two among groups of 3-4. We took some time to discuss our ideas for what to make, and then
    //                 stayed up all night to implement our idea.
    //                 \nMy focus was on character movement and the level-creator functionality. It took trial and error
    //                 to find the right constants to make the controls and gravity feel intuitive. One especially tricky
    //                 part was making the player interact correctly with platforms. The constant effect of gravity, and
    //                 the player's jumping and movement meant there were a lot of kinks to work out in deciding where the
    //                 player could go. Managed to get it working somewhere around 4 in the morning :)
    //                 \nThough we didn't win any prizes, I think I gained valuable experience for working
    //                 on a short timeline to ideate, plan, code, and present a product.`,
    image: stopdot,
    url: "https://github.com/vixu8/hack112",
    tags: ["Python", "cmu-graphics", "Game Dev"],
  },
  {
    id: 2,
    title: "HackCMU F25: CMUFence",
    startDate: "9/2025",
    endDate: "9/2025",
    shortDescription:
      "Collaborative drawing canvas inspired by the tradition of the Fence.",
    // fullDescription: ``,
    image: cmufence,
    url: "https://github.com/cjin3/DrawCMU",
    tags: ["React.js", "Firebase", "Web Dev"],
  },
  {
    id: 3,
    title: "Spotify Graddient",
    startDate: "12/2025",
    endDate: "",
    shortDescription:
      "Personal project; creates a color gradient playlist between two selected songs.",
    // fullDescription: ``,
    image: spotifyGradient,
    url: "https://github.com/vixu8/gradient-for-spotify",
    tags: [
      "React.js",
      "Vite",
      "Express",
      "JavaScript",
      "Spotify API",
      "Last.fm API",
    ],
  },
];

export default projects;
