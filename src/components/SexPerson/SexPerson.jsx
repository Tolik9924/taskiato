import React from 'react';
import s from './SexPerson.module.css';

const SexPerson = (props) => {
  return (
    <div onChange={props.onChangeValue} className={s.fromField}>
      <input type="radio" value="Male" name="sex" className="rad" /> Male
      <input type="radio" value="Female" name="sex" className="rad" /> Female
    </div>
  );
}

export default SexPerson;
