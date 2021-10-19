import React from 'react';
import NameForm from '../App';

const NamePerson = () => {
  return (
    <div>
      <label>
        Name:
            <input type="text" value={firstname} pattern="[A-Za-z]{2,}" onChange={handleChange} />
      </label>
    </div>
  );
}

export default NamePerson;
