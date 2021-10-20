import React, { useState } from 'react';
import Link from 'next/link';

import {
  Dropdown,
  DropdownButton,
  LogoButton,
  MainContent,
  Navbar,
  NavbarOverlay,
  NavButton,
  PageNavigation,
} from './Layout.styles';

export default function Layout({ modals, children }) {
  const [currentModal, setCurrentModal] = useState(modals[0].component);
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const toggleDropdown = () => setDisplayDropdown((prevState) => !prevState);
  const closeModal = () => setCurrentModal(modals[0].component);

  function handleModalSelect({ target }) {
    const modalIndex = target.value;
    setCurrentModal(modals[modalIndex].component);
  }

  const modalComponent = { ...currentModal };
  modalComponent.props = { ...modalComponent.props, closeModal };

  return (
    <>
      <NavbarOverlay>
        <Navbar>
          <PageNavigation>
            <LogoButton onClick={toggleDropdown}>Sigma Suite</LogoButton>
            <Dropdown isVisible={displayDropdown}>
              <DropdownButton>
                <Link href="/"> SIGMA MEMBERS</Link>
              </DropdownButton>
              <DropdownButton>
                {' '}
                <Link href="/calendar"> SIGMA CALENDAR</Link>
              </DropdownButton>
              <DropdownButton>SIGMA POOP</DropdownButton>
              <DropdownButton>
                <Link href="/ciombor"> CIOMBOR</Link>
              </DropdownButton>
            </Dropdown>
          </PageNavigation>

          {modals
            .filter((modals) => modals.name)
            .map((modal, index) => (
              <NavButton value={index + 1} onClick={(e) => handleModalSelect(e)} key={modal.name}>
                {modal.name}
              </NavButton>
            ))}
        </Navbar>
      </NavbarOverlay>
      <MainContent onClick={() => setDisplayDropdown(false)}>
        {modalComponent}
        {children}
      </MainContent>
    </>
  );
}
