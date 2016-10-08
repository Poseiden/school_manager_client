import React from 'react';

export class AppComponent extends React.Component {

  constructor() {

    super();

    this.doLogin = this.doLogin.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  validate() {
    if (this.state.username == '') {
      return false;
    }
    if (this.state.password == '') {
      return false;
    }
    if (this.state.username == 'admin' && this.state.password == 'admin') {
      return true;
    }
    return false;
  }

  doLogin() {
    const flag = this.validate();
    if (flag) {
      window.alert('login success');
    } else {
      window.alert('username or password not correct.');
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.username} type="text" className="username-input" onChange={(event) => {
          this.setState({
            username: event.target.value
          });
        }} placeholder="Username" />
      <br />
        <input value={this.state.password} type="password" className="password-input" onChange={(event) => {
          this.setState({
            password: event.target.value
          });
        }} placeholder="Password" />
        <br />
        <input type="button" className="submit" value="Login" onClick={this.doLogin} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
