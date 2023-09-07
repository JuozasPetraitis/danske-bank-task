const ROUTES = {
  HOME: {
    TITLE: "Home Page",
    PATH: "/",
  },
  ABOUT: {
    TITLE: "About Page",
    PATH: "/about",
  },
  FILMS: {
    TITLE: "Films page",
    PATH: "/films",
  },
};

const SWAPI_API_URL = {
  INDEX: "https://swapi.dev/api/",
  FILMS: "https://swapi.dev/api/films/",
  PEOPLE: "https://swapi.dev/api/people/",
};

const SCREEN_BREAKPOINTS = {
  MOBILE: 360,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1280,
  "2K": 1920,
};

export { ROUTES, SWAPI_API_URL, SCREEN_BREAKPOINTS };
