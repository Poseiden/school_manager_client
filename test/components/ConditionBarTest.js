/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount,shallow } from 'enzyme';
import ConditionBar from 'components/ConditionBar';
import sinon from 'sinon';

describe('ConditionBarComponent', () => {
  let ConditionBarComponent;

  beforeEach(() => {
    ConditionBarComponent = mount(<ConditionBar />);
  });

  describe('render', () => {
    it('should has name state for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().name, '');
    });
    it('should has min age for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().minAge, '');
    });
    it('should has max age for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().maxAge, '');
    });
    it('should has gender for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().gender, 'all');
    });
    it('should render a text input for saving name query condition', () => {
      assert.equal(ConditionBarComponent.find('.name-input').length, 1);
    });
    it('should change state name when name input changed', () => {
      const nameInput = ConditionBarComponent.find('.name-input');

      assert.equal(ConditionBarComponent.state().name, '');

      nameInput.prop('onChange')({
        target: {
          value: 'name'
        }
      });

      assert.equal(ConditionBarComponent.state().name, 'name');
    });
    it('should has max age input component', () => {
      const maxAgeInput = ConditionBarComponent.find('.maxAge-input');

      assert.equal(maxAgeInput.length, 1);
    });
    it('should change max age state when age age input changed.', () => {
      assert.equal(ConditionBarComponent.state().maxAge, '');
      
      ConditionBarComponent.find('.maxAge-input').prop('onChange')({
        target: {
          value: '1'
        }
      });
      assert.equal(ConditionBarComponent.state().maxAge, '1');
    });
    it('should has min age input component', () => {
      const minAgeInput = ConditionBarComponent.find('.minAge-input');
      
      assert.equal(minAgeInput.length, 1);
    });
    it('should change min age state when min age input changed.', () => {
      assert.equal(ConditionBarComponent.state().minAge, '');
      
      ConditionBarComponent.find('.minAge-input').prop('onChange')({
        target: {
          value: '1'
        }
      });
      
      assert.equal(ConditionBarComponent.state().minAge, '1');
    });
    it('should has drop down list for gender selection.', () => {
        assert.equal(ConditionBarComponent.find('.gender-input').length, 1);
    });
    it('should has two values in selection.', () => {
        assert.equal(ConditionBarComponent.find('.gender-input').find('option').length, 3);
    });
    it('should has default value for gender.', () => {
        assert.equal(ConditionBarComponent.state().gender, 'all');
    });
    it('should change gender when gender changed.', () => {
        assert.equal(ConditionBarComponent.state().gender, 'all');

        ConditionBarComponent.find('.gender-input').prop('onChange')({
            target: {
                value: 'male'
            }
        });

        assert.equal(ConditionBarComponent.state().gender, 'male');
    });
    it('should has query button. ', () => {
      assert.equal(ConditionBarComponent.find('.query-button').length, 1);
    });
    it('should has called query method when click query button', () => {
      sinon.spy(ConditionBar.prototype, 'query');

      ConditionBarComponent = mount(<ConditionBar />);

      ConditionBarComponent.find('.query-button').prop('onClick')();

      assert.equal(ConditionBar.prototype.query.calledOnce, true);

      ConditionBar.prototype.query.restore();
    })
  });

  describe('query', () => {
    it('should call validate when called query. ', () => {
      sinon.spy(ConditionBar.prototype, 'validate');

      ConditionBarComponent = mount(<ConditionBar />);

      ConditionBarComponent.find('.query-button').prop('onClick')();

      assert.equal(ConditionBar.prototype.validate.calledOnce, true);

      ConditionBar.prototype.validate.restore();
    });

    it('should return students array when validate return true. ', () => {
      sinon.stub(ConditionBar.prototype, 'validate').returns(true);

      ConditionBarComponent = mount(<ConditionBar />);

      assert(Array.isArray(ConditionBarComponent.find('.query-button').prop('onClick')()));

      ConditionBar.prototype.validate.restore();   
    })

    it('should alert \'information is invalid \' when validate return false. ', () => {
      sinon.stub(ConditionBar.prototype, 'validate').returns(false);

      ConditionBarComponent = mount(<ConditionBar />);

      sinon.spy(window, 'alert');

      ConditionBarComponent.find('.query-button').prop('onClick')();

      assert.equal(window.alert.calledWith('information is invalid. '), true);

      ConditionBar.prototype.validate.restore();
      window.alert.restore();
    })
  });
  describe('validate', () => {
    it('should return false when minAge includes letter. ', () => {
      ConditionBarComponent = shallow(<ConditionBar />);
      ConditionBarComponent.setState({
        minAge: 'abc'
      });

      assert.equal(ConditionBarComponent.instance().validate(), false);
    });
    it('should return true when minAge only includes number. ', () => {
      ConditionBarComponent = shallow(<ConditionBar />);
      ConditionBarComponent.setState({
        minAge: '12'
      });

      assert.equal(ConditionBarComponent.instance().validate(), true);
    });
    it('should return false when minAge is negative number. ', () => {
      ConditionBarComponent = shallow(<ConditionBar />);
      ConditionBarComponent.setState({
        minAge: '-12'
      });

      assert.equal(ConditionBarComponent.instance().validate(), false);
    });
    it('should return false when minAge is three digit number. ', () => {
      ConditionBarComponent = shallow(<ConditionBar />);
      ConditionBarComponent.setState({
        minAge: '100'
      });

      assert.equal(ConditionBarComponent.instance().validate(), false);
    });
    it.only('should return false when minAge is not integer. ', () => {
      ConditionBarComponent = shallow(<ConditionBar />);
      ConditionBarComponent.setState({
        minAge: '1.5'
      });

      assert.equal(ConditionBarComponent.instance().validate(), false);
    })
  })
});
