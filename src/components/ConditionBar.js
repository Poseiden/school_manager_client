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
    this.validate = this.validate.bind(this);
  }

  validate() {
    const numberReg = /^[0-9]{0,2}$/;
    if(numberReg.test(this.state.minAge) ){
      if(numberReg.test(this.state.maxAge)){
        if(this.state.minAge !== '' && this.state.maxAge !== '' && this.state.maxAge > this.state.minAge ){
          return true;
        }else if(this.state.minAge !== '' && this.state.maxAge !== '' && this.state.maxAge < this.state.minAge){
          return false;
        }else {
          return true;
        }
      }
    }
    return false;
  }

  query() {
    if(this.validate()){
      return [];
    }else{
      window.alert('information is invalid. ');
    }
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

        <input type="button" className="query-button" onClick={this.query} />
      </div>
    )
  }
}

ConditionBar.defaultProps = {};

export default ConditionBar;
