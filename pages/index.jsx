import React, { useEffect, useState } from 'react';

import { PERSONS } from '@endpoints/rustapi';
import usePersonModals from '../src/components/ModalFunctions/PersonModals';
import Layout from '../src/components/Layout/Layout';
import GlobalStyles from '../src/styles/GlobalStyles';

export default function PersonsPage() {
  const [persons, setPersons] = useState();
  const modals = usePersonModals(persons, setPersons);

  async function fetchPersons() {
    try {
      const resp = await fetch(PERSONS);
      const resJson = await resp.json();
      setPersons(resJson);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => fetchPersons(), []);

  return (
    <>
      <GlobalStyles />
      <Layout modals={modals} />
    </>
  );
}
