import React from 'react';
import {
  PersonTab,
  PersonName,
  PersonHeader,
  PersonBody,
  PersonContainerButton,
  PersonBodyRow,
  CringeSlider,
  PersonBodyInfo,
} from '../PersonTab/PersonTab.styles';

import { PersonsListContainer } from './PersonsList.styles';

export default function PersonsList({ persons }) {
  return (
    <PersonsListContainer>
      {persons &&
        persons.map((person) => (
          <PersonTab className="window " key={person.id}>
            <PersonHeader className="title-bar inactive ">
              <PersonName className="title-bar-text">{person.name}</PersonName>
              <div className="title-bar-controls">
                <PersonContainerButton aria-label="Close"></PersonContainerButton>
              </div>
            </PersonHeader>
            <PersonBody className="window-body">
              <PersonBodyRow className="field-row">
                <label htmlFor="text21">Name and Surname</label>
                <PersonBodyInfo id="text21" disabled type="text" defaultValue={person.name} />
              </PersonBodyRow>
              <PersonBodyRow className="field-row">
                <label htmlFor="text21">Date of brith</label>
                <PersonBodyInfo id="text21" disabled type="text" defaultValue="some Date" />
              </PersonBodyRow>
              <PersonBodyRow className="field-row">
                <label htmlFor="text21">Bank account</label>
                <PersonBodyInfo id="text21" disabled type="text" value={person.bankaccount || 69} />
              </PersonBodyRow>
              <PersonBodyRow className="field-row">
                <label htmlFor="range23">Cringe:</label>
                <label htmlFor="range23">Low</label>
                <CringeSlider id="range23" defaultValue={3} type="range" min="1" max="11" />
                <label htmlFor="range23">High</label>
              </PersonBodyRow>
            </PersonBody>
          </PersonTab>
        ))}
    </PersonsListContainer>
  );
}
