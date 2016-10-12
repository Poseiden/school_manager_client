/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import QueryPage from 'components/QueryPage';

describe('QueryPageComponent', () => {
  let QueryPageComponent;

  beforeEach(() => {
    QueryPageComponent = mount(<QueryPage />)
  });

  describe('render', () => {
    it('should render a condition bar', () => {
      const conditionBar = QueryPageComponent.find('ConditionBar');

      assert.equal(conditionBar.length, 1);
    });

    it('should render a table', () => {
      const table = QueryPageComponent.find('Table');
   
      assert.equal(table.length, 1);
    });

    it('should render a pagination bar', () => {
      const pagination = QueryPageComponent.find('Pagination');

      assert.equal(pagination.length, 1);
    });

    it('should has state for saving query result', () => {
      assert.equal(QueryPageComponent.state().resultSet, '');
    });

    it('should has property result set on condition bar', () => {
      const conditionBar = QueryPageComponent.find('ConditionBar');
     
      assert.equal(typeof conditionBar.props().resultSet, 'function');
    });

    //TODO should test getResultSet method()
  });

});
