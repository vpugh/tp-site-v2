import React from 'react';

const palette = {
  Orange: '#FFE6C2',
  Blue: '#B3EEFF',
  Green: '#DFF0CC',
};

const textColors = {
  Orange: '#573300',
  Blue: '#003C4D',
  Green: '#2D4314',
};

const jumboBg = {
  Orange: '#FFA119',
  Green: '#96CD56',
  Blue: '#19CDFF',
};

let root = document.documentElement;

const useThemePage = () => {
  const [currentTheme, setCurrentTheme] = React.useState();

  React.useEffect(() => {
    if (!currentTheme) {
      setCurrentTheme('Orange');
      document.body.style.backgroundColor = '#FFE6C2';
      root.style.setProperty('--textColor', textColors[currentTheme]);
      root.style.setProperty('--jumbotronBg', jumboBg[currentTheme]);
    } else {
      setCurrentTheme(currentTheme);
      document.body.style.backgroundColor = palette[currentTheme];
      root.style.setProperty('--textColor', textColors[currentTheme]);
      root.style.setProperty('--jumbotronBg', jumboBg[currentTheme]);
    }
  }, [currentTheme]);

  return {
    currentTheme,
    setCurrentTheme,
  };

  // Easiest solution of all !!! : useEffect(() => { document.body.style.backgroundColor = 'red' }, [])
};

export default useThemePage;
