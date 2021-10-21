import RegisterWindow from '@components/UserAccess/RegisterWindow';

const { default: LoginWindow } = require('@components/UserAccess/LoginWindow');

const emptyModal = () => <></>;
const displayLoginModal = () => <LoginWindow />;
const displayRegisterModal = () => <RegisterWindow />;

const modals = [
  { component: emptyModal },
  { component: displayLoginModal, name: 'LOGIN' },
  { component: displayRegisterModal, name: 'REGISTER' },
];
export default modals;
