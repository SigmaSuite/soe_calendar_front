import PersonForm from '@components/PersonsSection/PersonForm/PersonForm';
import PersonsList from '@components/PersonsSection/PersonsList/PersonsList';

const usePersonModals = (persons, setPersons) => {
  const displayPersonsInModal = () => <PersonsList persons={persons} />;
  const displayPersonFormInModal = () => <PersonForm setPersons={setPersons} />;
  const emptyModal = () => <></>;

  const modals = [
    { component: emptyModal },
    { component: displayPersonsInModal, name: 'DISPLAY PERSONS' },
    { component: displayPersonFormInModal, name: 'ADD PERSON' },
  ];
  return modals;
};
export default usePersonModals;
