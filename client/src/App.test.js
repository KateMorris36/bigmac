import React from 'react';
import App from './App';
import BigMac from './components/BigMac';
import { shallow } from 'enzyme';
import axios from 'axios';
jest.mock('axios');

describe('General Application Tests', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Big Mac Page', () => {
  test('should get data', () => {
    const getSpy = jest.spyOn(axios, 'get');
    shallow(<BigMac />);
    expect(getSpy).toBeCalled();
  });
});
