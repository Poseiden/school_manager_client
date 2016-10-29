/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';
import Main from 'components/Main';

describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = mount(<Main />);
  });

  describe('render', () => {
    it('should has TextInput', () => {
      const input = MainComponent.find('.username-input');

      assert.equal(input.length, 1);
      assert.equal(input.prop('placeholder'), 'Username');
      assert.equal(input.prop('type'), 'text');
    });

    it('should has PasswordInout', () => {
      const input = MainComponent.find('.password-input');

      assert.equal(input.length, 1);
      assert.equal(input.prop('placeholder'), 'Password');
      assert.equal(input.prop('type'), 'password');
    });

    it('should has Button', () => {
      const button = MainComponent.find('.submit');

      assert.equal(button.length, 1);
      assert.equal(button.prop('value'), 'Login');
      assert.equal(button.prop('type'), 'button');
    });

    it('should pass doLogin to Button as onClick event handler', () => {
      sinon.spy(Main.prototype, 'doLogin');

      MainComponent = mount(<Main />);

      MainComponent.find('.submit').prop('onClick')();

      assert.equal(Main.prototype.doLogin.calledOnce, true);

      Main.prototype.doLogin.restore();
    });

    it('should has state for save username', () => {
      assert.equal(MainComponent.state().username, '');
    });

    it('should has state for save password', () => {
      assert.equal(MainComponent.state().password, '');
    });

    it('should change state.username when username changed', () => {
      const input = MainComponent.find('.username-input');

      assert.equal(MainComponent.state().username, '');

      assert.equal(typeof input.prop('onChange'), 'function');

      input.prop('onChange')({
        target: {
          value: 'username'
        }
      });

      assert.equal(MainComponent.state().username, 'username');
    });

    it('should change state.password when password changed', () => {
      const input = MainComponent.find('.password-input');

      assert.equal(MainComponent.state().password, '');

      assert.equal(typeof input.prop('onChange'), 'function');

      input.prop('onChange')({
        target: {
          value: 'password'
        }
      });

      assert.equal(MainComponent.state().password, 'password');
    });
  });

  describe('doLogin', () => {
    it('should call function validate with username and password do validation', () => {

      sinon.spy(Main.prototype, 'validate');

      MainComponent = mount(<Main />);

      const submit = MainComponent.find('.submit');

      submit.prop('onClick')();

      assert.equal(Main.prototype.validate.calledOnce, true);

      Main.prototype.validate.restore();
    });

    it('should alert \'login success\' when validate is true', () => {
      sinon.stub(Main.prototype, 'validate').returns(true);

      MainComponent = mount(<Main />);
      const submit = MainComponent.find('.submit');
      sinon.spy(window, 'alert');

      submit.prop('onClick')();

      assert.equal(window.alert.calledWith('login success'), true);

      Main.prototype.validate.restore();
      window.alert.restore();
    });

    it('should alert error message when validate is false', () => {
      sinon.stub(Main.prototype, 'validate').returns(false);

      MainComponent = mount(<Main />);
      const submit = MainComponent.find('.submit');
      sinon.spy(window, 'alert');

      submit.prop('onClick')();

      assert.equal(window.alert.calledWith('username or password not correct.'), true);

      Main.prototype.validate.restore();
      window.alert.restore();
    });
  });

  describe('validate', () => {
    it('should return false when username is empty', () => {
      MainComponent.find('.username-input').prop('onChange')({
        target: {
          value: ''
        }
      });

      MainComponent.find('.password-input').prop('onChange')({
        target: {
          value: '123'
        }
      });

      assert.equal(MainComponent.instance().validate(), false);
    });

    it('should return false when password is empty', () => {
      MainComponent.find('.username-input').prop('onChange')({
        target: {
          value: '123'
        }
      });
      MainComponent.find('.password-input').prop('onChange')({
        target: {
          value: ''
        }
      });

      assert.equal(MainComponent.instance().validate(), false);
    });

    it('should return true when username and password equals \'admin\'.', () => {
      MainComponent.find('.username-input').prop('onChange')({
        target: {
          value: 'admin'
        }
      });
      MainComponent.find('.password-input').prop('onChange')({
        target: {
          value: 'admin'
        }
      });

      assert.equal(MainComponent.instance().validate(), true);
    });

    it('should return false when username not equals \'admin\'', () => {
      MainComponent.find('.username-input').prop('onChange')({
        target: {
          value: 'ad'
        }
      });
      MainComponent.find('.password-input').prop('onChange')({
        target: {
          value: 'admin'
        }
      });

      assert.equal(MainComponent.instance().validate(), false);
    });

    it('should return false when password not equals \'admin\'', () => {
      MainComponent.find('.username-input').prop('onChange')({
        target: {
          value: 'admin'
        }
      });
      MainComponent.find('.password-input').prop('onChange')({
        target: {
          value: 'adm'
        }
      });

      assert.equal(MainComponent.instance().validate(), false);
    });
  });
});
