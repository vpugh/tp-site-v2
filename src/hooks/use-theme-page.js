import React from 'react';

const themePalette = {
  Orange: '#FFE6C2',
  Blue: '#B3EEFF',
  Green: '#DFF0CC',
  textColors: {
    Orange: '#573300',
    Blue: '#003C4D',
    Green: '#2D4314',
  },
  jumboBg: {
    Orange: '#FFA119',
    Green: '#96CD56',
    Blue: '#19CDFF',
  },
};

const isBrowser = () => typeof window !== 'undefined';

let root;

root = isBrowser() ? window?.document?.documentElement : null;

const useThemePage = () => {
  const [currentTheme, setCurrentTheme] = React.useState();
  React.useEffect(() => {
    let savedTheme =
      (isBrowser() && window.localStorage.getItem('siteColor')) || undefined;
    if (savedTheme && !currentTheme) {
      setCurrentTheme(savedTheme);
      savedTheme = undefined;
    }
    if (!savedTheme && !currentTheme) {
      setCurrentTheme('Orange');
      isBrowser() && window.localStorage.setItem('siteColor', currentTheme);
      isBrowser() &&
        (window.document.body.style.backgroundColor =
          themePalette[currentTheme]);
      isBrowser() &&
        root.style.setProperty(
          '--textColor',
          themePalette.textColors[currentTheme]
        );
      isBrowser() &&
        root.style.setProperty(
          '--jumbotronBg',
          themePalette.jumboBg[currentTheme]
        );
    }
    if (currentTheme) {
      setCurrentTheme(currentTheme);
      isBrowser() && window.localStorage.setItem('siteColor', currentTheme);
      isBrowser() &&
        (window.document.body.style.backgroundColor =
          themePalette[currentTheme]);
      isBrowser() &&
        root.style.setProperty(
          '--textColor',
          themePalette.textColors[currentTheme]
        );
      isBrowser() &&
        root.style.setProperty(
          '--jumbotronBg',
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
