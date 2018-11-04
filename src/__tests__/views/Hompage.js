import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import Homepage from "../../views/Homapage/Homepage.jsx";

const mockStore = configureMockStore();
const store = mockStore();

describe("Homepage view", () => {
  test("renders the homepage component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
