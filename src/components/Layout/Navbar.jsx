import React from 'react';
import PropTypes from 'prop-types';

import LoginWindow from '@components/UserAccess/LoginWindow';
import RegisterWindow from '@components/UserAccess/RegisterWindow';
import {
  Dropdown,
  DropdownButton,
  LogoButton,
  NavbarContainer,
  PageNavigation,
} from './Layout.styles';

export default function Navbar({ toggleDropdown, setCurrentModal, displayDropdown }) {
  const closeModal = () => setCurrentModal(<></>);
  return (
    <NavbarContainer>
      <PageNavigation>
        <LogoButton onClick={toggleDropdown}>Sigma Suite</LogoButton>
        <Dropdown isVisible={displayDropdown}>
          <DropdownButton
            onClick={() => {
              setCurrentModal(<LoginWindow closeModal={closeModal} />);
              toggleDropdown();
            }}
          >
            LOGIN
          </DropdownButton>
          <DropdownButton
            onClick={() => {
              setCurrentModal(<RegisterWindow closeModal={closeModal} />);
              toggleDropdown();
            }}
          >
            REGISTER
          </DropdownButton>
        </Dropdown>
      </PageNavigation>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  displayDropdown: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  setCurrentModal: PropTypes.func.isRequired,
};
