const { default: LoginWindow } = require('@components/UserLogin/LoginWindow');

const emptyModal = () => <></>;
const displayLoginModal = () => <LoginWindow />;

const modals = [{ component: emptyModal }, { component: displayLoginModal, name: 'LOGIN' }];
export default modals;
