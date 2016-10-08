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

  }

  doLogin() {
    this.validate();
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
