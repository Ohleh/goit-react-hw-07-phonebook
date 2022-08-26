// import React from 'react';

import { useFindContactsQuery } from 'redux/phoneApi';
import { useState } from 'react';
import { useGetContactsQuery } from 'redux/phoneApi';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const {
    data: value,
    error: errorGet,
    isLoading: isLoadingGet,
  } = useGetContactsQuery();

  // const { data, error, isLoading } = useFindContactsQuery();

  const filteredContacts = filter
    ? value.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : value;

  console.log(filteredContacts);

  const onHandleChange = e => {
    // if (isLoading) return;
    // else setFilter(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <>
      <label>
        Find Contacts by name
        <br />
        <input
          type="text"
          // value={value}
          onChange={onHandleChange}
        />
      </label>
    </>
  );
};

// Filter.propTypes = {
//   value: propTypes.string.isRequired,
// };

export default Filter;
