import './App.css';
import React from 'react';
import NamePerson from './components/NamePerson';
import SurnamePerson from './components/SurnamePerson/SurnamePerson';
import FatherName from './components/FatherName/FatherName';
import SexPerson from './components/SexPerson/SexPerson';
import PhonePerson from './components/PhonePerson/PhonePerson';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      fathername: '',
      sex: '',
      phone: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangeFathername = this.handleChangeFathername.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeLastname(event) {
    this.setState({ surname: event.target.value });
  }

  handleChangeFathername(event) {
    this.setState({ fathername: event.target.value });
  }

  onChangeValue(event) {
    this.setState({ sex: event.target.value });
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    alert('Person info: ' + this.state.name + ' ' + this.state.surname + ' ' + this.state.fathername + ' ' + this.state.sex + ' ' + this.state.phone);
    event.preventDefault();
  }

  render() {
    return (
      <form className="register-form-container" onSubmit={this.handleSubmit}>
        <div>
          <p className="form-title">Інформація користувача</p>
          <NamePerson  name={this.state.name} handleChange={this.handleChange} />
          <SurnamePerson surname={this.state.surname} handleChangeLastname={this.handleChangeLastname } />
          <FatherName fathername={this.state.fathername} handleChangeFathername={this.handleChangeFathername} />
          <SexPerson onChangeValue={this.onChangeValue} />
          <PhonePerson phone={this.state.phone} handleChangePhone={this.handleChangePhone} />
          <button type="submit" value="Submit" className="button">Submit</button>
        </div>
      </form>
    );
  }
}

export default NameForm;
