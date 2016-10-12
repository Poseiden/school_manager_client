import React from 'react';

class ConditionBar extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      minAge: '',
      maxAge: ''
    }
  }
  render() {
    return <div>Hello</div>
  }
}

ConditionBar.defaultProps = {};

export default ConditionBar;