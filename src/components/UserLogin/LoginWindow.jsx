import React, { useState } from 'react';

import { WindowBody, WindowControls, WindowHeader } from '@components/Generic/WindowsElements';
import {
  LoginButtons,
  LoginContainer,
  LoginCredentialsContainer,
  LoginDescription,
  LoginFormRow,
  LoginHeader,
  LoginImageContainer,
} from './LoginWindow.styles';

export default function LoginWindow({ closeModal }) {
  const [isMaximized, setIsMaximized] = useState(false);
  return (
    <LoginContainer isMaximized={isMaximized} className="window">
      <WindowHeader className="title-bar">
        <LoginHeader className="title-bar-text">Login in to your Sigma Account</LoginHeader>
        <WindowControls className="title-bar-controls">
          <button type="button" onClick={() => setIsMaximized(false)} aria-label="Minimize" />
          <button type="button" onClick={() => setIsMaximized(true)} aria-label="Maximize" />
          <button onClick={closeModal} type="button" aria-label="Close" />
        </WindowControls>
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
        </LoginCredentialsContainer>
        <LoginButtons>
          <button type="button">OK</button>
          <button onClick={closeModal} type="button">
            Cancel
          </button>
        </LoginButtons>
      </WindowBody>
    </LoginContainer>
  );
}
