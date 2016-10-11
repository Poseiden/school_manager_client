/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import ConditionBar from 'components/ConditionBar';
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
    })
  })
});
