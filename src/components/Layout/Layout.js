import React, { useState } from 'react';

import { LogoButton, MainContent, Navbar, NavbarOverlay, NavButton } from './Layout.styles';

export default function Layout({ modals }) {
  const closeModal = () => setCurrentModal(modals[0].component);
  const [currentModal, setCurrentModal] = useState(modals[0].component);

  function handleModalSelect({ target }) {
    const modalIndex = target.value;
    setCurrentModal(modals[modalIndex].component);
  }

  const modalComponent = Object.assign({}, currentModal);
  modalComponent.props = { ...modalComponent.props, closeModal };

  return (
    <MainContent>
      <NavbarOverlay>
        <Navbar>
          <LogoButton>Sigma Suite</LogoButton>
          {modals
            .filter((modals) => modals.name)
            .map((modal, index) => (
              <NavButton value={index + 1} onClick={(e) => handleModalSelect(e)} key={modal.name}>
                {modal.name}
              </NavButton>
            ))}
        </Navbar>
      </NavbarOverlay>
      {modalComponent}
    </MainContent>
  );
}
