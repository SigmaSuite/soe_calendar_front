import React, { useState } from 'react';

import { WindowBody, WindowDescription, WindowHeader } from '@components/Generic/WindowsElements';
import calendarOptions from '@components/ModalFunctions/CalendarModals';
import WindowControls from '@components/Generic/WindowControls';
import {
  CalendarContentContainer,
  CalendarOption,
  CalendarOptionsButton,
  CalendarOptionsSwitch,
  CalendarWindowContainer,
} from './CalendarMenu.styles';

export default function CalendarMenu({ closeModal }) {
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
        <WindowControls
          closeModal={closeModal}
          setIsMaximized={setIsMaximized}
          className="title-bar-controls"
        />
      </WindowHeader>
      <WindowBody className="window-body">
        <CalendarContentContainer>
          <CalendarOptionsSwitch>
            {options.map(({ name: optionName }) => (
              <CalendarOptionsButton
                value={optionName}
                isActive={selectedOption.name === optionName}
                key={optionName}
                type="button"
                onClick={(e) => handleOptionSelect(e)}
              >
                {optionName}
              </CalendarOptionsButton>
            ))}
          </CalendarOptionsSwitch>
          <CalendarOption>{selectedOption.component}</CalendarOption>
        </CalendarContentContainer>
      </WindowBody>
    </CalendarWindowContainer>
  );
}
