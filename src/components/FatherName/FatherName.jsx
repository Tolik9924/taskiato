import React from 'react';
import s from './FatherName.module.css';

const FatherName = (props) => {
  return (
    <div className={s.formField}>
      <label>
        <input type="text" value={props.fathername} placeholder="Fathername" pattern="[A-Za-z]{2,}" onChange={props.handleChangeFathername} required />
      </label>
    </div>
  );
}

export default FatherName;
