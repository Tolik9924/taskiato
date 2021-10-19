import './App.css';
import React from 'react';

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
          <p className="form-title">Інформація корстувача</p>
          <div className="form-field">
            <label>
            <input type="text" value={this.state.name} placeholder="Name" pattern="[A-Za-z]{2,}" onChange={this.handleChange} />
            </label>
          </div>
          <div className="form-field">
            <label>
            <input type="text" value={this.state.surname} placeholder="Surname" pattern="[A-Za-z]{2,}" onChange={this.handleChangeLastname} />
            </label>
          </div>
          <div className="form-field"> 
            <label>
              <input type="text" value={this.state.fathername} placeholder="Fathername" pattern="[A-Za-z]{2,}" onChange={this.handleChangeFathername} required />
            </label>
          </div>
          <div onChange={this.onChangeValue} className="form-field">
            <input type="radio" value="Male" name="sex" className="rad" /> Male
          <input type="radio" value="Female" name="sex" className="rad" /> Female
        </div>
          <div className="form-field">
            <label>
            <input type="text" value={this.state.phone} placeholder="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChangePhone} />
            </label>
          </div>
          <button type="submit" value="Submit" className="button">Submit</button>
        </div>
      </form>
    );
  }
}

export default NameForm;
