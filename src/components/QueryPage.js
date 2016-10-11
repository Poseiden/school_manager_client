import React from 'react';
import ConditionBar from './ConditionBar';
import Table from './Table';

class QueryPage extends React.Component {

  render() {
    return (
      <div>
        <ConditionBar className='condition-bar'/>
        <Table className=".table"/>
      </div>
    )
  }
}

QueryPage.defaultProps = {};

export default QueryPage;
