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
      const button = MainComponent.find('.submit');

      assert.equal(button.prop('onClick').name, 'doLogin');
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

  describe.only('doLogin', () => {
    it('should call function validate with username and password do validation', () => {

      sinon.spy(Main.prototype, 'validate');

      MainComponent = mount(<Main />);

      const submit = MainComponent.find('.submit');

      submit.prop('onClick')();

      assert.equal(Main.prototype.validate.calledOnce, true);

      Main.prototype.validate.restore();
    });

    //   it('should redirect to home page when validate is true', () => {
    //     const validateTrue = sinon.stub('validate').returns(true);
    //
    //     const submit = MainComponent.find('.submit');
    //
    //     submit.click();
    //
    //     assert(window.url, '/home');
    //   });
    //
    //   it('should alert error message when validate is false', () => {
    //     const validateFalse = sinon.stub('validate').returns(false);
    //
    //     const submit = MainComponent.find('.submit');
    //
    //     submit.click();
    //
    //     assert(window.alert, 'The username or password is not correct');
    //   });
  });

  describe('validate', () => {

  });

});
