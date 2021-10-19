import React, { useState } from 'react';

import {
  WindowBody,
  WindowControls,
  WindowDescription,
  WindowHeader,
} from '@components/Generic/WindowsElements';
import calendarOptions from '@components/ModalFunctions/CalendarModals';
import {
  CalendarContentContainer,
  CalendarOption,
  CalendarOptionsButton,
  CalendarOptionsSwitch,
  CalendarWindowContainer,
} from './CalendarMenu.styles';

export default function CalendarMenu() {
  const options = calendarOptions;
  const [selectedOption, setSelectionOption] = useState(options[0]);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleOptionSelect = ({ target }) => {
    const selectedOptionName = target.value;
    setSelectionOption(options.find((option) => option.name === selectedOptionName));
  };

  return (
    <CalendarWindowContainer isMaximized={isMaximized} className="window">
      <WindowHeader className="title-bar">
        <WindowDescription className="title-bar-text">Sigma Calendar</WindowDescription>
        <WindowControls className="title-bar-controls">
          <button onClick={() => setIsMaximized(false)} type="button" aria-label="Minimize" />
          <button onClick={() => setIsMaximized(true)} type="button" aria-label="Maximize" />
          <button type="button" aria-label="Close" />
        </WindowControls>
      </WindowHeader>
      <WindowBody className="window-body">
        <CalendarContentContainer>
          <CalendarOptionsSwitch>
            {options.map(({ name }) => (
              <CalendarOptionsButton
                value={name}
                isActive={selectedOption.name === name}
                key={name}
                type="button"
                onClick={(e) => handleOptionSelect(e)}
              >
                {name}
              </CalendarOptionsButton>
            ))}
          </CalendarOptionsSwitch>
          <CalendarOption>{selectedOption.component}</CalendarOption>
        </CalendarContentContainer>
      </WindowBody>
    </CalendarWindowContainer>
  );
}
