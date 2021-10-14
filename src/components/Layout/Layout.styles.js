import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 1440px;
  height: 100%;
`;
export const NavbarOverlay = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.color.silver};
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
  z-index: 99;
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 40px;
`;
export const LogoButton = styled.button`
  height: 100%;
  width: 30rem;
  margin-right: 10rem;
`;

export const NavButton = styled.button`
  height: 100%;
  width: 14rem;
`;
