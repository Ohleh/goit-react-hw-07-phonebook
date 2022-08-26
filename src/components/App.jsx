import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';
import { useGetContactsQuery } from 'redux/phoneApi';

export const App = () => {
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        {/* <Contacts /> */}
      </div>
    </>
  );
};
