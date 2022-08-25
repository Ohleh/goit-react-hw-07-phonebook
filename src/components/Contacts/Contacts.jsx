import React from 'react';
import ContactsRender from './ContactsRender';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/phoneApi';
import { useFindContactsQuery } from 'redux/phoneApi';

const Contacts = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  // const { data: value } = useFindContactsQuery();
  // console.log(value);

  // const filter = useSelector(state => state.phonebook.contacts.filter);
  // const contacts = useSelector(state => state.phonebook.contacts.items);

  // const filteredContacts = filter
  //   ? contacts.filter(({ name }) =>
  //       name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : data;

  return (
    <div>
      {error && <p>Трясця, кіна не буде</p>}
      {isLoading ? (
        <p>Качаю кілобайти</p>
      ) : (
        <ul>
          {data.map(({ id, name, phone }) => (
            <ContactsRender key={id} contact={[id, name, phone]} />
          ))}
        </ul>
      )}
    </div>
  );
};

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};

export default Contacts;
