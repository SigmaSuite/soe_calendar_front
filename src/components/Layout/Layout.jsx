import React, { useState } from 'react';

import LoginWindow from '@components/UserAccess/LoginWindow';
import RegisterWindow from '@components/UserAccess/RegisterWindow';
import DesktopIcon from '@components/Generic/DesktopIcon';
import DesktopIcons from '@components/DesktopIcons/DesktopIcons';
import {
  Desktop,
  Dropdown,
  DropdownButton,
  LogoButton,
  MainContent,
  ModalContainer,
  Navbar,
  NavbarOverlay,
  PageNavigation,
} from './Layout.styles';

export default function Layout() {
  const [currentModal, setCurrentModal] = useState(<></>);
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const toggleDropdown = () => setDisplayDropdown((prevState) => !prevState);
  const closeModal = () => setCurrentModal(<></>);

  const modalComponent = { ...currentModal, props: { ...currentModal.props, closeModal } };
  console.log(process.env.NEXT_PUBLIC_BASE_PATH);
  return (
    <>
      <NavbarOverlay>
        <Navbar>
          <PageNavigation>
            <LogoButton onClick={toggleDropdown}>Sigma Suite</LogoButton>
            <Dropdown isVisible={displayDropdown}>
              <DropdownButton
                onClick={() => {
                  setCurrentModal(<LoginWindow />);
                  toggleDropdown();
                }}
              >
                LOGIN
              </DropdownButton>
              <DropdownButton
                onClick={() => {
                  setCurrentModal(<RegisterWindow />);
                  toggleDropdown();
                }}
              >
                REGISTER
              </DropdownButton>
            </Dropdown>
          </PageNavigation>
        </Navbar>
      </NavbarOverlay>
      <MainContent onClick={() => setDisplayDropdown(false)}>
        <Desktop>
          <ModalContainer>{modalComponent}</ModalContainer>
          {DesktopIcons.map(({ component, name }) => (
            <DesktopIcon
              key={name}
              component={component}
              name={name}
              setCurrentModal={setCurrentModal}
            />
          ))}
        </Desktop>
      </MainContent>
    </>
  );
}
