import React from 'react';

import CalendarMenu from '@components/Calendar/CalendarMenu/CalendarMenu';
import GlobalStyles from '@styles/GlobalStyles';
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
