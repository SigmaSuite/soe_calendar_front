import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { WindowBody, WindowHeader } from '@components/Generic/WindowsElements';
import WindowControls from '@components/Generic/WindowControls';
import {
  ErrorMessage,
  LoginButtons,
  LoginContainer,
  LoginCredentialsContainer,
  LoginDescription,
  LoginFormErrorContainer,
  LoginFormRow,
  LoginHeader,
  LoginImageContainer,
} from './LoginWindow.styles';

export default function LoginWindow({ closeModal }) {
  const [isError, setIsError] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // implement login logic
    const error = { message: 'Some error mockup' };
    setIsError(error);
  }

  return (
    <LoginContainer isMaximized={isMaximized} className="window">
      <WindowHeader isInvalid={isError} className="title-bar">
        <LoginHeader className="title-bar-text">Login in to your Sigma Account</LoginHeader>
        <WindowControls setIsMaximized={setIsMaximized} closeModal={closeModal} />
      </WindowHeader>
      <WindowBody className="window-body">
        <LoginImageContainer />
        <LoginCredentialsContainer>
          <LoginDescription>Type a user name and password to log on to Sigma.</LoginDescription>
          <LoginFormRow className="field-row">
            <label htmlFor="username">
              <u>U</u>ser name
            </label>
            <input id="username" type="text" />
          </LoginFormRow>
          <LoginFormRow className="field-row">
            <label htmlFor="password">
              <u>P</u>assword
            </label>
            <input id="password" type="password" />
          </LoginFormRow>
          {isError && (
            <LoginFormErrorContainer>
              <ErrorMessage className="status-bar-field">{isError.message}</ErrorMessage>
            </LoginFormErrorContainer>
          )}
        </LoginCredentialsContainer>
        <LoginButtons>
          <button onClick={(e) => handleSubmit(e)} type="submit">
            OK
          </button>
          <button onClick={closeModal} type="button">
            Cancel
          </button>
        </LoginButtons>
      </WindowBody>
    </LoginContainer>
  );
}

LoginWindow.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
