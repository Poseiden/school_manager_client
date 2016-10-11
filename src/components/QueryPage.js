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
  }
  
  render() {
    return (
      <div>
        <ConditionBar className='condition-bar'/>
        <Table className="table"/>
        <Pagination className="pagination"/>
      </div>
    )
  }
}

QueryPage.defaultProps = {};

export default QueryPage;
