import React from 'react';
import ConditionBar from './ConditionBar';
import Table from './Table';
import Pagination from './Pagination';

class QueryPage extends React.Component {
  constructor() {
    super();

    this.state = {
      resultSet: ''
    }

    this.getResultSet = this.getResultSet.bind(this);
  }

  getResultSet() {

  }
  
  render() {
    return (
      <div>
        <ConditionBar className='condition-bar' resultSet={this.getResultSet}/>
        <Table className="table"/>
        <Pagination className="pagination"/>
      </div>
    )
  }
}

QueryPage.defaultProps = {};

export default QueryPage;
