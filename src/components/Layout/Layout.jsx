import React, { useState } from 'react';

import DesktopIcon from '@components/Generic/DesktopIcon';
import DesktopIcons from '@components/DesktopIcons/DesktopIcons';
import { Desktop, MainContent, ModalContainer, NavbarOverlay } from './Layout.styles';
import Navbar from './Navbar';

export default function Layout() {
  const [currentModal, setCurrentModal] = useState(<></>);
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const toggleDropdown = () => setDisplayDropdown((prevState) => !prevState);

  return (
    <>
      <NavbarOverlay>
        <Navbar
          toggleDropdown={toggleDropdown}
          displayDropdown={displayDropdown}
          setCurrentModal={setCurrentModal}
        />
      </NavbarOverlay>
      <MainContent onClick={() => setDisplayDropdown(false)}>
        <Desktop>
          <ModalContainer>{currentModal}</ModalContainer>
          {DesktopIcons.map(({ component, name }) => (
            <DesktopIcon
              key={name}
              Component={component}
              name={name}
              setCurrentModal={setCurrentModal}
            />
          ))}
        </Desktop>
      </MainContent>
    </>
  );
}
