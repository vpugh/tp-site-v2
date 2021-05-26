import React from "react";

const themePalette = {
  Orange: "#FFE6C2",
  Blue: "#B3EEFF",
  Green: "#DFF0CC",
  textColors: {
    Orange: "#573300",
    Blue: "#003C4D",
    Green: "#2D4314",
  },
  jumboBg: {
    Orange: "#FFA119",
    Green: "#96CD56",
    Blue: "#19CDFF",
  },
};

let root;

if (typeof window !== undefined || window.document) {
  root = document.documentElement;
}

const useThemePage = () => {
  const [currentTheme, setCurrentTheme] = React.useState();

  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem("siteColor");
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
    if (!savedTheme && !currentTheme) {
      setCurrentTheme("Orange");
      window.localStorage.setItem("siteColor", currentTheme);
      document.body.style.backgroundColor = themePalette[currentTheme];
      root.style.setProperty(
        "--textColor",
        themePalette.textColors[currentTheme]
      );
      root.style.setProperty(
        "--jumbotronBg",
        themePalette.jumboBg[currentTheme]
      );
    }
    if (currentTheme) {
      setCurrentTheme(currentTheme);
      window.localStorage.setItem("siteColor", currentTheme);
      document.body.style.backgroundColor = themePalette[currentTheme];
      root.style.setProperty(
        "--textColor",
        themePalette.textColors[currentTheme]
      );
      root.style.setProperty(
        "--jumbotronBg",
        themePalette.jumboBg[currentTheme]
      );
    }
  }, [currentTheme]);

  return {
    currentTheme,
    setCurrentTheme,
  };
};

export default useThemePage;
