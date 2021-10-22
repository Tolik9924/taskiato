import React from 'react';
import s from './SurnamePerson.module.css';

const SurnamePerson = (props) => {
  return (
    <div className={s.formField}>
      <label>
        <input type="text" value={props.surname} placeholder="Surname" pattern="[A-Za-z]{2,}" onChange={props.handleChangeLastname} />
      </label>
    </div>
  );
}

export default SurnamePerson;
