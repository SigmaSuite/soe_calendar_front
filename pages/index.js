import React, { useEffect, useState } from 'react';

import usePersonModals from '../src/components/Layout/ModalFunctions/PersonModals';
import Layout from '../src/components/Layout/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import { PERSONS } from '@endpoints/rustapi';

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
      <Layout modals={modals}></Layout>
    </>
  );
}
