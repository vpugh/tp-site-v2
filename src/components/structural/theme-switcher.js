import React from 'react';
import useThemePage from '../../hooks/use-theme-page';
import {
  SwitcherContainer,
  SwitchButton,
} from '../../styles/styled/theme-switcher';

const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme } = useThemePage();

  if (!currentTheme) {
    return null;
  }

  const updateThemeSelection = (e) => {
    const { value } = e.target;
    setCurrentTheme(value);
  };

  return (
    <SwitcherContainer currentTheme={currentTheme}>
      <SwitchButton>
        <svg
          width='19'
          height='19'
          viewBox='0 0 19 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='9.5'
            cy='9.5'
            r='8.44444'
            stroke='var(--textColor)'
            stroke-width='2.11111'
          />
          <circle
            cx='9.5'
            cy='9.5'
            r='8.44444'
            stroke='var(--textColor)'
            stroke-width='2.11111'
          />
          <path
            d='M18.5777 9.5C18.5777 14.367 14.6531 18.3528 9.71104 18.5686V0.431422C14.6531 0.647247 18.5777 4.633 18.5777 9.5Z'
            fill='var(--textColor)'
          />
          <path
            d='M18.5777 9.5C18.5777 14.367 14.6531 18.3528 9.71104 18.5686V0.431422C14.6531 0.647247 18.5777 4.633 18.5777 9.5Z'
            fill='var(--textColor)'
          />
          <path
            d='M18.5777 9.5C18.5777 14.367 14.6531 18.3528 9.71104 18.5686V0.431422C14.6531 0.647247 18.5777 4.633 18.5777 9.5Z'
            stroke='var(--textColor)'
            stroke-width='0.844444'
          />
          <path
            d='M18.5777 9.5C18.5777 14.367 14.6531 18.3528 9.71104 18.5686V0.431422C14.6531 0.647247 18.5777 4.633 18.5777 9.5Z'
            stroke='var(--textColor)'
            stroke-width='0.844444'
          />
        </svg>
        <select
          value={currentTheme}
          onChange={(e) => updateThemeSelection(e)}
          onBlur={(e) => updateThemeSelection(e)}
        >
          <option value='Green'>Green</option>
          <option value='Orange'>Orange</option>
          <option value='Blue'>Blue</option>
        </select>
      </SwitchButton>
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
