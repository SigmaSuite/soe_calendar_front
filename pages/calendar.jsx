import React from 'react';

import GlobalStyles from '@styles';
import CalendarMenu from '@components/Calendar/CalendarMenu';
import Layout from '../src/components/Layout/Layout';
import modals from '../src/components/ModalFunctions/LoginModals';

export default function calendar() {
  return (
    <>
      <GlobalStyles />
      <Layout modals={modals}>
        <CalendarMenu />
      </Layout>
    </>
  );
}
