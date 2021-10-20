import React from 'react';

import modals from '../src/components/ModalFunctions/LoginModals';
import Layout from '../src/components/Layout/Layout';
import GlobalStyles from '../src/styles/GlobalStyles';

export default function ciombor() {
  return (
    <>
      <GlobalStyles />
      <Layout modals={modals} />
    </>
  );
}
