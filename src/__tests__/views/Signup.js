import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import toJson from 'enzyme-to-json';
import Signup from "../../views/Signup/Signup";

const mockStore = configureMockStore();
const store = mockStore();

const mockFunction = param => jest.fn(param);

describe("Signin Page", () => {
  test("renders the signin page", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Signup registerUser={mockFunction} />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});