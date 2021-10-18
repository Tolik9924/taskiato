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
    this.setState({name: event.target.value});
  }

  handleChangeLastname(event) {
    this.setState({surname: event.target.value});
  }

  handleChangeFathername(event) {
    this.setState({fathername: event.target.value});
  }

  onChangeValue(event) {
    this.setState({sex: event.target.value});
  }

  handleChangePhone(event) {
    this.setState({phone: event.target.value});
  }
  
  handleSubmit(event) {
    alert('Person info: ' + this.state.name + ' ' + this.state.surname + ' ' + this.state.fathername + ' ' + this.state.sex + ' ' + this.state.phone);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={this.state.name} pattern="[A-Za-z]{2,}" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Surname:
            <input type="text" value={this.state.surname} pattern="[A-Za-z]{2,}" onChange={this.handleChangeLastname} />
          </label>
        </div>
        <div>
          <label>
            Fathername:
              <input type="text" value={this.state.fathername} pattern="[A-Za-z]{2,}" onChange={this.handleChangeFathername} required/>
          </label>
        </div>
        <div onChange={this.onChangeValue}>
          <input type="radio" value="Male" name="sex" className="rad" /> Male
          <input type="radio" value="Female" name="sex" className="rad" /> Female
        </div>
        <div>
        <label>
            Phone:
            <input type="text" value={this.state.phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChangePhone} />
          </label>
        </div>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default NameForm;
