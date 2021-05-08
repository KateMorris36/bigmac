import App from './App';
import { shallow } from 'enzyme';

describe('General Application Tests', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Big Mac Page', () => {
  describe('User Information Section', () => {
    test('renders without crashing', () => {
      shallow(<App />);
    });
  });
  describe('Local Information Section', () => {});
  describe('Random Comparison Section', () => {});
});
