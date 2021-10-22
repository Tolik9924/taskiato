import React from 'react';

const NamePerson = (props) => {
  return (
    <div className="form-field">
      <label>
            <input type="text" value={props.name} placeholder="Name" pattern="[A-Za-z]{2,}" onChange={props.handleChange} />
      </label>
    </div>
  );
}

export default NamePerson;
