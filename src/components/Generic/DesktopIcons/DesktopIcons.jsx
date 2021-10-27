import PersonForm from '@components/Generic/PersonsManagment/PersonForm/PersonForm';
import PersonsList from '@components/Generic/PersonsManagment/PersonsList/PersonsList';
import CalendarMenu from '../../Calendar/CalendarMenu/CalendarMenu';

export const LaunchCalendar = { component: CalendarMenu, name: 'Calendar' };
export const LaunchAddPerson = { component: PersonForm, name: 'Add Person' };
export const LaunchListPersons = { component: PersonsList, name: 'List Persons' };

const DesktopIcons = [LaunchCalendar, LaunchAddPerson, LaunchListPersons];

export default DesktopIcons;
