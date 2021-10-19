import SigmaBirthdays from '@components/Calendar/SigmaBirthdays/SigmaBirthdays';

const eventsOption = {
  name: 'Sigma Events',
  component: <div />,
};
const birthdaysOption = {
  name: 'Sigma Birthdays',
  component: <SigmaBirthdays />,
};

const someOption = {
  name: 'Sigma some other option',
  component: <div />,
};

const calendarOptions = [eventsOption, birthdaysOption, someOption];
export default calendarOptions;
