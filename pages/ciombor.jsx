import React from 'react';

import CalendarMenu from '@components/Calendar/CalendarMenu';
import modals from '../src/components/ModalFunctions/LoginModals';
import Layout from '../src/components/Layout/Layout';
import GlobalStyles from '../styles/GlobalStyles';

export default function ciombor() {
  return (
    <>
      <GlobalStyles />
      <Layout modals={modals}>
        <CalendarMenu />
      </Layout>
    </>
  );
}
