import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { MainButton, WindowDescription, WindowHeader } from '@components/Generic/WindowsElements';
import WindowControls from '@components/Generic/WindowControls';
import {
  RegisterDescription,
  RegisterForm,
  RegisterFormRow,
  RegisterImageContainer,
  RegisterWindowBody,
  RegisterWindowButtonsContainer,
  RegisterWindowContainer,
  RegisterWindowContent,
} from './RegisterWindow.styles';
import { ErrorMessage } from './LoginWindow.styles';

export default function RegisterWindow({ closeModal }) {
  const [error, setError] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  function handleRegister(event) {
    event.preventDefault();
    const mockupError = { message: 'Some mockup error' };
    setError(mockupError);
  }

  return (
    <RegisterWindowContainer isMaximized={isMaximized} className="window">
      <WindowHeader isInvalid={error} className="title-bar">
        <WindowDescription className="title-bar-text">Register new Sigma User</WindowDescription>
        <WindowControls closeModal={closeModal} setIsMaximized={setIsMaximized} />
      </WindowHeader>
      <RegisterWindowBody inColumn className="window-body">
        <RegisterWindowContent>
          <RegisterImageContainer isInvalid={error} />
          <RegisterForm>
            <RegisterDescription>
              Enter basic information for the new Sigma user.
            </RegisterDescription>
            <RegisterFormRow className="field-row">
              <label htmlFor="username">
                <u>U</u>ser name
              </label>
              <input id="username" type="text" />
            </RegisterFormRow>
            <RegisterFormRow className="field-row">
              <label htmlFor="number">
                <u>P</u>hone Number
              </label>
              <input id="number" type="text" />
            </RegisterFormRow>
            <RegisterFormRow className="field-row">
              <label htmlFor="password">
                <u>P</u>assword
              </label>
              <input id="password" type="password" />
            </RegisterFormRow>
            <RegisterFormRow className="field-row">
              <label htmlFor="confirm-password">
                <u>C</u>onfirm Password
              </label>
              <input id="confirm-password" type="password" />
            </RegisterFormRow>
            {error ? <ErrorMessage>{error.message}</ErrorMessage> : <p>To continue, click Next.</p>}
          </RegisterForm>
        </RegisterWindowContent>
        <RegisterWindowButtonsContainer>
          <button type="button">{'< Back'}</button>
          <MainButton onClick={(e) => handleRegister(e)}>{'Next >'}</MainButton>
          <button onClick={closeModal} type="button">
            Cancel
          </button>
        </RegisterWindowButtonsContainer>
      </RegisterWindowBody>
    </RegisterWindowContainer>
  );
}

RegisterWindow.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
