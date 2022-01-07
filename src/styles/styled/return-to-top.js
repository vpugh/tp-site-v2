import styled from 'styled-components';

export const ReturnToTopContainer = styled.div`
  position: fixed;
  bottom: 90px;
  right: 70px;
  @media (min-width: 1024px) {
    right: 70px;
    bottom: 45px;
  }
  .icon-holder {
    height: 34px;
    width: 34px;
    transform: rotate(-90deg);
    transition: 300ms ease-in-out;
    background: var(--textColor);
    padding: 20px;
    border-radius: 50%;
    fill: #fff;
    @media (min-width: 1024px) {
      height: 25px;
      width: 25px;
    }
  }
`;
