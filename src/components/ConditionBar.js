import React from 'react';

class ConditionBar extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      minAge: '',
      maxAge: '',
      gender: 'all'
    };

    this.query = this.query.bind(this);
  }

  query() {

  }

  render() {
    return (
      <div>
        Name: <input type="text" className="name-input" onChange={(event) => {
          this.setState({
            name : event.target.value
          });
        }}/>
        <br />
        MaxAge: <input type="text" className="maxAge-input" onChange={(event) => {
          this.setState({
            maxAge: event.target.value
          })
        }} />
        ~
        MinAge: <input type="text" className="minAge-input" onChange={(event) => {
          this.setState({
            minAge: event.target.value
          })
        }} />
        <br />
        Gender: <select className="gender-input" onChange={(event) => {
            this.setState({
                gender: event.target.value
            })
        }}>
          <option value="all" >All</option>
          <option value="male" >Male</option>
          <option value="female" >Female</option>
        </select>

        <input type="button" className="query-button" />
      </div>
    )
  }
}

ConditionBar.defaultProps = {};

export default ConditionBar;
