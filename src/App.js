import './App.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PersonForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <h1 className='form-title'>Person data</h1>
      <div className='form-field'>
        <Field placeholder={'Name'} 
               name={'name'}  
               pattern={'[A-Za-z]{2,}'} 
               component={'input'}
               required />
      </div>
      <div>
        <Field placeholder={'SecondName'} 
              name={'secondName'} 
              pattern={'[A-Za-z]{2,}'} 
              component={'input'} 
              required />
      </div>
      <div>
        <Field placeholder={'FatherName'} 
              name={'fatherName'} 
              pattern={'[A-Za-z]{2,}'} 
              component={'input'}  
              required />
      </div>
      <div className='form-field'>
        <p className='form-text'>Your sex: </p>
        <Field type={'radio'} 
               id={'malesex'} 
               name={'sex'} 
               value={'male'} 
               className={'rad'} 
               component={'input'}
               required />
        <Field for={'malesex'} component={'label'}  /> Male
        <Field type={'radio'} 
               id={'womensex'} 
               name={'sex'} 
               value={'women'} 
               className={'rad'} 
               component={'input'} />
        <Field for={'womensex'} component={'label'} /> Female
      </div>
      <div>
       <Field placeholder={'PhoneNumber'} type={'text'} id={'mob'} name={'phone'} pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'} component={'input'} />
      </div>
      <div>
        <button className='button'>Submit</button>
      </div>
    </form>
  );
}

const PersonReduxForm = reduxForm({
  form: 'person'
})(PersonForm)

const Person = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return(
    <div className='register-form-container'>
      <PersonReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Person;
