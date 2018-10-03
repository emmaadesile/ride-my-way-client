import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe("Tests for App component", () => {
  test("renders", () => {
    const app = shallow(<App />)
    // expect(app.JSON().toMatchSnapshot());
    expect(app.exists()).toBe(true);
  });
})