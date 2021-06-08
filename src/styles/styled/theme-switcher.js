import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  display: inline-block;
  border-radius: 24px;
  padding: 4px;
  background: var(--text-transparent);
  position: relative;
  white-space: nowrap;
  &::before {
    content: '';
    background: var(--textColor);
    width: 33%;
    position: absolute;
    top: 4px;
    right: 4px;
    border-radius: 20px;
    height: 40px;
    transition: all 0.5s;
    right: ${(props) =>
      props.currentTheme === 'Orange'
        ? 'calc(66% - 4px)'
        : props.currentTheme === 'Green'
        ? 'calc(33% - 4px)'
        : 'calc(0% - 4px)'};
  }
`;

export const ThemeLabel = styled.span`
  font-size: 0.75rem;
  padding: 10px 35px;
  line-height: 20px;
  display: inline-block;
  position: relative;
  font-weight: 500;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
`;
