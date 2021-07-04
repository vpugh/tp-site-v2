import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  @media (max-width: 460px) {
    display: none;
  }
  display: inline-block;
  padding: 4px;
  background: var(--text-transparent);
  position: relative;
  white-space: nowrap;
  transition: 300ms ease-in-out;
  &:hover {
    opacity: 1;
  }
  .mobile-menu & {
    display: block;
    opacity: 1;
    select {
      opacity: 1;
    }
  }
`;

export const ThemeLabel = styled.span`
  font-size: 0.85rem;
  padding: 8px 20px;
  line-height: 20px;
  display: inline-block;
  position: relative;
  font-weight: 500;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

export const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  /* opacity: 0.05; */
  svg {
    margin-right: 8px;
  }
  select {
    opacity: 0.05;
    transition: 300ms ease-in-out;
    border: none;
    background: transparent;
  }
  &:hover {
    cursor: pointer;
    & > select {
      opacity: 1;
    }
  }
`;
