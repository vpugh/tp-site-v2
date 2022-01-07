import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  @media (max-width: 1023px) {
    left: 20px;
    bottom: 90px;
    opacity: 0.5;
  }
  position: fixed;
  display: inline-block;
  padding: 8px;
  border-radius: 6px;
  background: var(--text-transparent);
  border: 1px solid var(--textColor);
  white-space: nowrap;
  transition: 300ms ease-in-out;
  left: 20px;
  bottom: 45px;
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
  select {
    width: 0;
    opacity: 0.25;
    transition: 600ms ease-in-out;
    border: none;
    background: transparent;
  }
  &:hover {
    svg {
      margin-right: 8px;
    }
    cursor: pointer;
    & > select {
      opacity: 1;
      width: auto;
    }
  }
`;
