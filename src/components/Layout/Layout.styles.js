import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const NavbarOverlay = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 40px;
  background: ${({ theme: { color } }) => color.silver};
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
  z-index: 99;
  bottom: 0;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 40px;
`;
export const LogoButton = styled.button`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-style: italic;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bolder};
  height: 100%;
  min-height: 4rem;
  width: 30rem;
  margin-right: 10rem;
`;

export const NavButton = styled.button`
  height: 100%;
  width: 14rem;
`;

export const PageNavigation = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ isVisible }) => (isVisible ? 'auto' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const DropdownButton = styled.button`
  border: none;
  box-shadow: none;
  height: 4rem;
  min-height: 4rem;
  width: 30rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};

  &:hover {
    background: linear-gradient(90deg, navy, #1084d0);
    color: white;
    text-decoration: underline;
  }
  &:active,
  &:focus,
  &:not(:disabled):active {
    box-shadow: none;
    outline: none;
    padding: 0;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
  }
`;

export const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;
