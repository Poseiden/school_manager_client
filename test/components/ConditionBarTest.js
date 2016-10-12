/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount } from 'enzyme';
import ConditionBar from 'components/ConditionBar';

describe('ConditionBarComponent', () => {
  let ConditionBarComponent;

  beforeEach(() => {
    ConditionBarComponent = mount(<ConditionBar />);
  });

  describe('render', () => {
    it('should has name state for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().name, '');
    });
  });
});
