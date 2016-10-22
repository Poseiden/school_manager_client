import React from 'react';

class ConditionBar extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      minAge: '',
      maxAge: '',
      gender: ''
    }
  }
  render() {
    return (
      <div>
        <input type="text" className="name-input" onChange={(event) => {
          this.setState({
            name : event.target.value
          });
        }}/>
        <input type="text" className="maxAge-input" onChange={(event) => {
          this.setState({
            maxAge: event.target.value
          })
        }} />
        <input type="text" className="minAge-input" onChange={(event) => {
          this.setState({
            minAge: event.target.value
          })
        }} />
        <select className="gender-input" onChange={(event) => {
            this.setState({
                gender: event.target.value
            })
        }}>
          <option value="male" className="male-option">Male</option>
          <option value="female" className="female-option">Female</option>
        </select>
      </div>
    )
  }
}

ConditionBar.defaultProps = {};

export default ConditionBar;
