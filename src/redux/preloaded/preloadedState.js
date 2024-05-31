import {
  training_app__img,
  onlinestats__img,
  music_app_img,
  nolk_template_img,
  twitter_clone_img,
  anydo_clone_img,
  music_app_img__jpg,
  anydo_clone_img__jpg,
  twitter_clone_img__jpg,
  nolk_template_img__jpg,
  onlinestats__jpg,
  training_app__jpg,
  igplus__jpg,
  gpt__jpg,
  gallery__jpg,
  chesspro__jpg,
  lichesspro__jpg,
  spoplus__jpg,
  chessgame__jpg,

  igplus__img,
  gpt__img,
  gallery__img,
  chesspro__img,
  lichesspro__img,
  spoplus__img,
  chessgame__img,
  gwarda__jpg,
  matro__jpg,
  docu__jpg,
  gwarda__img,
  matro__img,
  docu__img,
} from "@/assets";

const currentThemeFromStorage = localStorage.getItem("currentTheme") || "dark";
const currentLangFromStorage = localStorage.getItem("i18nextLng") || "en";

const initialState = {
  apr: {
    currentTheme: currentThemeFromStorage,
    currentLang: currentLangFromStorage,
    lastProjects: [
      {
        id: "db64-betnrwnrt45v4gn",
        date: "27.08.2023",
        img: lichesspro__img,
        img__jpg: lichesspro__jpg,
        stack: ['Chrome', "MS Egde", "Firefox", "Extension"],
        source_url: "https://github.com/chesshelper/lichesshelper/",
        preview_url: "https://weblxapplications.com/lc/",
      },
      {
        id: "d0c97369-e345-4759-a619-0520d4e58274",
        date: "28.02.2024",
        img: docu__img,
        img__jpg: docu__jpg,
        stack: [
          "webpack",
          "React",
          "npmjs"
        ],
        source_url: "https://github.com/gerwld/docusaurus-plugin-fix-react",
        preview_url: "https://www.npmjs.com/package/docusaurus-plugin-fix-react",
      },

      {
        id: "a79e04bc-4bf4-4d23-b23d-c2c8221a6180",
        date: "26.02.2024",
        img: matro__img,
        img__jpg: matro__jpg,
        stack: [
          "Open Source",
          "npmjs",
          "Web Accessibility",
          "UIKit",
          "React"
        ],
        source_url: "https://github.com/matro-ui/matro-ui",
        preview_url: "https://matro-ui.github.io/docs/intro/",
      },
      {
        id: "dbbetb-e46b8r8b54e3f",
        date: "12.11.2023",
        img: igplus__img,
        img__jpg: igplus__jpg,
        stack: ['Chrome', "MS Egde", "Firefox"],
        source_url: "https://github.com/gerwld/igplus-extension/",
        preview_url: "https://weblxapplications.com/igp/",
      },
      {
        id: "8fc7da5b-799a-4415-b0ef-f2633b0e55a6",
        date: "10.01.2024",
        img: gwarda__img,
        img__jpg: gwarda__jpg,
        stack: [
          "Amazon",
          "Research",
          'Chrome',
          "Firefox",
        ],
        source_url: "https://github.com/gerwld/gwardaapp_amazon",
        preview_url: "https://github.com/gerwld/gwardaapp_amazon",
      },



      {
        id: "db64-be4dbf8r8b54e3f",
        date: "14.03.2023",
        img: gpt__img,
        img__jpg: gpt__jpg,
        stack: ["Python", 'Selenium', "Pipelines"],
        source_url: "https://github.com/gerwld/gpt4_selenium/",
        preview_url: "https://github.com/gerwld/gpt4_selenium/",
      },
      {
        id: "dbf0-beqr0b890eq9r8b98",
        date: "26.04.2022",
        img: music_app_img,
        img__jpg: music_app_img__jpg,
        stack: ["AudioSession API", 'React', "RWD"],
        source_url: "https://github.com/gerwld/music-app",
        preview_url: "/music-app/",
      },

      {
        id: "db64-be46bmyr8b54egf",
        date: "02.08.2023",
        img: chesspro__img,
        img__jpg: chesspro__jpg,
        stack: ['Chrome', "MS Egde", "Firefox", "Opera"],
        source_url: "https://github.com/chesshelper/chesshelper",
        preview_url: "https://weblxapplications.com/ch/",
      },
      {
        id: "db64-be46b8rht53f",
        date: "14.04.2022",
        img: gallery__img,
        img__jpg: gallery__jpg,
        stack: ['JavaScript'],
        source_url: "https://codepen.io/gerwld/pen/poxyvrg/",
        preview_url: "https://github.com/gerwld/parallax-gallery/",
      },

      {
        id: "db64-rt46b8r8b543f",
        date: "23.10.2022",
        img: spoplus__img,
        img__jpg: spoplus__jpg,
        stack: ['Chrome', "MS Egde", "Firefox", "Opera"],
        source_url: "https://github.com/gerwld/spoplus-extension/",
        preview_url: "https://weblxapplications.com/sp/",
      },


      {
        id: "db64-be46b8r8b54e3f",
        date: "27.06.2022",
        img: training_app__img,
        img__jpg: training_app__jpg,
        source_url: "https://github.com/gerwld/training-peaks/",
      },
      {
        id: "dbf0-beqr56b8r8brbe5l",
        date: "02.04.2022",
        img: onlinestats__img,
        img__jpg: onlinestats__jpg,
        preview_url: "https://tgmetrics.com",
        source_url: "https://github.com/123-develop/is-online-telegram-frontend/"
      },
      {
        id: "fbd07wavab0987erab709adb",
        date: "12.09.2022",
        img: anydo_clone_img,
        img__jpg: anydo_clone_img__jpg,
        stack: ['JWT Auth', "RWD"],
        source_url: "https://github.com/gerwld/anydo",
        preview_url: "/anydo/",
      },
      {
        id: "db64-betnrgn-ntrt44v4gn",
        date: "16.08.2023",
        img: chessgame__img,
        img__jpg: chessgame__jpg,
        source_url: "https://github.com/gerwld/chess_game/",
        preview_url: "/chess_game/",
      },
      {
        id: "fadb0978a8f90b7986da0968",
        date: "02.07.2021",
        img: twitter_clone_img,
        img__jpg: twitter_clone_img__jpg,
        source_url: "https://github.com/gerwld/reactTS-twitter",
        preview_url: null,
      },
      {
        id: "0879fbd9078adfb0a7dfb908",
        date: "21.08.2021",
        img: nolk_template_img,
        img__jpg: nolk_template_img__jpg,
        source_url: "https://github.com/gerwld/nolk-template",
        preview_url: "/nolk-template/",
      },
    ],
  },
};

export default initialState;
