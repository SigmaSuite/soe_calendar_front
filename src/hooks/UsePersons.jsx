import { useEffect, useState } from 'react';
import { PERSONS } from '../endpoints/rustapi';

const usePersons = () => {
  const [persons, setPersons] = useState(null);

  async function fetchPersons() {
    try {
      const resp = await fetch(PERSONS);
      const resJson = await resp.json();
      setPersons(resJson);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPersons();
  }, []);

  return persons;
};

export default usePersons;
