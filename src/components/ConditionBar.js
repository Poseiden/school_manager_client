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
        <input type="text" className="maxAge-input" />
        <input type="text" className="minAge-input" />
      </div>
    )
  }
}

ConditionBar.defaultProps = {};

export default ConditionBar;