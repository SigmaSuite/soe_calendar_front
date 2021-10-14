import React, { useState } from 'react';

import { PERSONS } from '@endpoints/rustapi';
import {
  ButtonRow,
  PersonFormContainer,
  PersonFormHeader,
  PersonFormInput,
  PersonFormInputsContainer,
  PersonFormLabel,
  PersonFormRow,
  SubmitButton,
} from './PersonForm.styles';

export default function PersonForm({ setPersons, closeModal }) {
  const [name, setName] = useState('');
  const [cardId, setCardId] = useState('');
  const [isLarge, setIsLarge] = useState(false);

  const clearForm = () => {
    setName('');
    setCardId('');
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const newPerson = {
      name: name,
      bankaccount: cardId,
    };
    if (!(name || cardId)) return;
    try {
      const res = await fetch(PERSONS, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPerson),
      });
      const resJson = await res.json();
      clearForm();
      setPersons((persons) => [...persons, resJson]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PersonFormContainer
      isLarge={isLarge}
      className="window"
      method={'post'}
      onSubmit={handleSubmit}
    >
      <PersonFormInputsContainer>
        <PersonFormHeader className="title-bar">
          <div className="title-bar-text">Add New Sigma Member</div>
          <div className="title-bar-controls">
            <button onClick={() => setIsLarge(false)} aria-label="Minimize"></button>
            <button onClick={() => setIsLarge(true)} aria-label="Maximize"></button>
            <button onClick={() => closeModal()} aria-label="Close"></button>
          </div>
        </PersonFormHeader>
        <PersonFormRow className="field-row">
          <PersonFormLabel htmlFor="name">Name</PersonFormLabel>
          <PersonFormInput
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            type={'text'}
          />
        </PersonFormRow>
        <PersonFormRow className="field-row">
          <PersonFormLabel htmlFor="bankaccount">Bank Account</PersonFormLabel>
          <PersonFormInput
            id="bankaccount"
            value={cardId}
            onChange={({ target }) => setCardId(target.value)}
            minLength={16}
            min={0}
            type={'number'}
          />
        </PersonFormRow>
        <PersonFormRow className="field-row">
          <PersonFormLabel htmlFor="birthday">Birthday</PersonFormLabel>
          <PersonFormInput id="birthday" type={'date'} />
        </PersonFormRow>
        <PersonFormRow className="field-row">
          <PersonFormLabel htmlFor="cringe">Cringe</PersonFormLabel>
          <PersonFormInput id="cringe" type={'range'} />
        </PersonFormRow>
      </PersonFormInputsContainer>
      <ButtonRow>
        <button onClick={() => closeModal()}>Cancel</button>
        <SubmitButton type={'submit'}>Submit</SubmitButton>
      </ButtonRow>
    </PersonFormContainer>
  );
}
