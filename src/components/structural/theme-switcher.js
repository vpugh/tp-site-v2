import React from 'react';
import useThemePage from '../../hooks/use-theme-page';
import {
  SwitcherContainer,
  ThemeLabel,
} from '../../styles/styled/theme-switcher';

const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme } = useThemePage();

  return (
    <SwitcherContainer currentTheme={currentTheme}>
      <ThemeLabel
        onClick={() => setCurrentTheme('Orange')}
        className='theme-label'
      >
        Orange
      </ThemeLabel>
      <ThemeLabel
        onClick={() => setCurrentTheme('Green')}
        className='theme-label'
      >
        Green
      </ThemeLabel>
      <ThemeLabel
        onClick={() => setCurrentTheme('Blue')}
        className='theme-label'
      >
        Blue
      </ThemeLabel>
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
