/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';
import MainTwo from 'components/MainTwo';

describe('MainTwoComponent', () => {
  let MainTwoComponent;

  beforeEach(() => {
    MainTwoComponent = mount(<MainTwo />);
  });

  describe('render', () => {
    it('should render a text input ', () => {
      const username = MainTwoComponent.find('.username-input');

      assert.equal(username.length, 1);
      assert.equal(username.prop('placeholder'), 'Username');
      assert.equal(username.prop('type'), 'text');
    });

    it('should render a password input', () => {
      const password = MainTwoComponent.find('.password-input');

      assert.equal(password.length, 1);
      assert.equal(password.prop('type'), 'password');
      assert.equal(password.prop('placeholder'), 'Password');
    });

    it('should render a submit button', () => {
      const submit = MainTwoComponent.find('.submit');

      assert.equal(submit.length, 1);
      assert.equal(submit.prop('type'), 'button');
      assert.equal(submit.prop('value'), 'submit');
    });

    it('should pass doLogin to Button as onClick event handler', () => {
      const submit = MainTwoComponent.find('.submit');

      assert.equal(typeof submit.prop('onClick'), 'function');
      assert.equal(submit.prop('onClick').name, 'doLogin');
    });

    it('should has state for saving username', () => {
      assert.equal(MainTwoComponent.state().username, '');
    });

    it('should has state for saving password', () => {
      assert.equal(MainTwoComponent.state().password, '');
    });

    it('should change username state when username changed', () => {
      assert.equal(MainTwoComponent.state().username, '');

      MainTwoComponent.find('.username-input').prop('onChange')({
        target: {
          value: 'username'
        }
      });

      assert.equal(MainTwoComponent.state().username, 'username');
    });

    it('should change password state when password changed', () => {
      assert.equal(MainTwoComponent.state().password, '');

      MainTwoComponent.find('.password-input').prop('onChange')({
        target: {
          value: 'password'
        }
      });

      assert.equal(MainTwoComponent.state().password, 'password');
    });
  });

  describe('doLogin', () => {
    it('should call validate with username and password when login', () => {
      sinon.spy(MainTwo.prototype, 'validate');

      MainTwoComponent = mount(<MainTwo />);

      MainTwoComponent.find('.submit').prop('onClick')();

      assert.equal(MainTwo.prototype.validate.calledOnce, true);

      MainTwo.prototype.validate.restore();
    });

    it('should alert \'login success\' when login success', () => {
      sinon.stub(MainTwo.prototype, 'validate').returns(true);

      MainTwoComponent = mount(<MainTwo />);

      sinon.spy(window, 'alert');

      MainTwoComponent.find('.submit').prop('onClick')();

      assert.equal(window.alert.calledWith('login success'), true);

      window.alert.restore();

      MainTwo.prototype.validate.restore();
    });

    it('should alert \'username or password not correct\'', () => {
      sinon.stub(MainTwo.prototype, 'validate').returns(false);

      MainTwoComponent = mount(<MainTwo />);

      sinon.spy(window, 'alert');

      MainTwoComponent.find('.submit').prop('onClick')();

      assert.equal(window.alert.calledWith('username or password not correct'), true);

      window.alert.restore();

      MainTwo.prototype.validate.restore();
    });
  });

  describe('validate', () => {
    it('should return false when username is empty', () => {
      MainTwoComponent.find('.username-input').prop('onChange')({
        target: {
          value: ''
        }
      });

      MainTwoComponent.find('.password-input').prop('onChange')({
        target: {
          value: 'password'
        }
      });

      assert.equal(MainTwoComponent.instance().validate(), false);
    });

    it('should return false when password is empty', () => {
      MainTwoComponent.find('.username-input').prop('onChange')({
        target: {
          value: 'username'
        }
      });
      MainTwoComponent.find('.password-input').prop('onChange')({
        target: {
          value: ''
        }
      });

      assert.equal(MainTwoComponent.instance().validate(), false);
    });

    it('should return true when username and password both equal to admin', () => {
      MainTwoComponent.find('.username-input').prop('onChange')({
        target: {
          value: 'admin'
        }
      });

      MainTwoComponent.find('.password-input').prop('onChange')({
        target: {
          value: 'admin'
        }
      });

      assert.equal(MainTwoComponent.instance().validate(), true);
    });

    it('should return false when username not equal to \'admin\'', () => {
      MainTwoComponent.find('.username-input').prop('onChange')({
        target: {
          value: 'username'
        }
      });

      MainTwoComponent.find('.password-input').prop('onChange')({
        target: {
          value: 'admin'
        }
      });

      assert.equal(MainTwoComponent.instance().validate(), false);
    });

    it('should return false when password not equal to \'admin\'', () => {
      MainTwoComponent.find('.username-input').prop('onChange')({
        target: {
          value: 'admin'
        }
      });

      MainTwoComponent.find('.password-input').prop('onChange')({
        target: {
          value: 'password'
        }
      });

      assert.equal(MainTwoComponent.instance().validate(), false);
    })
  });
});
