// import React from 'react';
import Contacts from '../Contacts/Contacts';
// import { useFindContactsQuery } from 'redux/phoneApi';
import { useState } from 'react';
import { useGetContactsQuery } from 'redux/phoneApi';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const {
    data: value,
    // error: errorGet,
    // isLoading: isLoadingGet,
  } = useGetContactsQuery();

  // const { data, error, isLoading } = useFindContactsQuery();

  const filteredContacts = filter
    ? value.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : value;

  // console.log(filteredContacts);

  return (
    <>
      <label>
        Find Contacts by name
        <br />
        <input
          type="text"
          // value={value}
          onChange={e => setFilter(e.target.value)}
        />
      </label>
      <Contacts filteredContacts={filteredContacts} />
    </>
  );
};

export default Filter;
