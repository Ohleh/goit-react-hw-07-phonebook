// import React from 'react';

import { useFindContactsQuery } from 'redux/phoneApi';
import { useState } from 'react';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useFindContactsQuery(filter);
  console.log(data);

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
