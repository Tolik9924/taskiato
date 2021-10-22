import React from 'react';
import s from './PhonePerson.module.css';

const PhonePerson = (props) => {
  return (
    <div className={s.formField}>
      <label>
        <input type="text" value={props.phone} placeholder="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={props.handleChangePhone} />
      </label>
    </div>
  );
}

export default PhonePerson;
