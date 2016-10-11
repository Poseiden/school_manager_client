import React from 'react';
import ConditionBar from './ConditionBar';

class QueryPage extends React.Component {

  render() {
    return (
      <div>
        <ConditionBar className='condition-bar'/>
      </div>
    )
  }
}

QueryPage.defaultProps = {};

export default QueryPage;
