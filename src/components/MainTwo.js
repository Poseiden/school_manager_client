import React from 'react';

export class AppComponentTwo extends React.Component {
  constructor() {
    super();

    this.doLogin = this.doLogin.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  doLogin() {

  }

  render() {
    return (
      <div>
        <span>Hello this is Main Component Two</span>
        <br />
        <input type="text" className="username-input" placeholder="Username" onChange={(event) => {
          this.setState({
            username: event.target.value
          });
        }}/>
        <br />
        <input type="password" className="password-input" placeholder="Password" onChange={(event) => {
          this.setState({
            password: event.target.value
          });
        }}/>
        <br />
        <input type="button" value="submit" className="submit" onClick={this.doLogin}/>
      </div>
    );
  }
}

AppComponentTwo.defaultProps = {};

export default AppComponentTwo;