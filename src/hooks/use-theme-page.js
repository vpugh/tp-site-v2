import React from 'react';

const themePalette = {
  Orange: '#FFE6C2',
  Blue: '#B3EEFF',
  Green: '#DFF0CC',
  textColors: {
    Orange: '#754400',
    Blue: '#005870',
    Green: '#3d5a1b',
  },
  bgBoxShading: {
    Orange: '#FFBC5C',
    Blue: '#7adcfa',
    Green: '#bde094',
  },
  jumboBg: {
    Orange: '#FFA119',
    Green: '#96CD56',
    Blue: '#19CDFF',
  },
  buttonBg: {
    Orange: '#995900',
    Blue: '#006C8A',
    Green: '#476A20',
  },
  buttonBorderBg: {
    Orange: '#8A5000',
    Blue: '#005870',
    Green: '#3F5E1C',
  },
};

const isBrowser = () => typeof window !== 'undefined';

let root;

root = isBrowser() ? window?.document?.documentElement : null;

const useThemePage = () => {
  const [currentTheme, setCurrentTheme] = React.useState();
  React.useEffect(() => {
    let savedTheme;
    if (!savedTheme) {
      const localTheme = window.localStorage.getItem('siteColor');
      if ((isBrowser() && localTheme !== 'undefined') || localTheme !== true) {
        savedTheme = localTheme;
      } else {
        setCurrentTheme('Orange');
      }
    }
    if (savedTheme && !currentTheme) {
      setCurrentTheme(savedTheme);
    }
    if (!savedTheme && !currentTheme) {
      setCurrentTheme('Orange');
      isBrowser() && window.localStorage.setItem('siteColor', currentTheme);
      isBrowser() &&
        document
          .getElementsByTagName('html')[0]
          .setAttribute('class', currentTheme);
      isBrowser() &&
        root.style.setProperty('--pageBgColor', themePalette[currentTheme]);
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
      isBrowser() &&
        root.style.setProperty(
          '--buttonBg',
          themePalette.buttonBg[currentTheme]
        );
      isBrowser() &&
        root.style.setProperty(
          '--buttonBorderBg',
          themePalette.buttonBorderBg[currentTheme]
        );
      isBrowser() &&
        root.style.setProperty(
          '--boxShading',
          themePalette.bgBoxShading[currentTheme]
        );
    }
    if (currentTheme) {
      setCurrentTheme(currentTheme);
      isBrowser() && window.localStorage.setItem('siteColor', currentTheme);
      isBrowser() &&
        document
          .getElementsByTagName('html')[0]
          .setAttribute('class', currentTheme);
      isBrowser() &&
        root.style.setProperty('--pageBgColor', themePalette[currentTheme]);
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
      isBrowser() &&
        root.style.setProperty(
          '--buttonBg',
          themePalette.buttonBg[currentTheme]
        );
      isBrowser() &&
        root.style.setProperty(
          '--buttonBorderBg',
          themePalette.buttonBorderBg[currentTheme]
        );
      isBrowser() &&
        root.style.setProperty(
          '--boxShading',
          themePalette.bgBoxShading[currentTheme]
        );
    }
  }, [currentTheme]);

  return {
    currentTheme,
    setCurrentTheme,
  };
};

export default useThemePage;
