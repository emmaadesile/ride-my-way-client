import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Signin from "../../views/Signin/Signin";

const mockStore = configureMockStore();
const store = mockStore();

const mockFunction = param => jest.fn(param);

describe("Signin Page", () => {
  test("renders the signin page", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Signin loginUser={mockFunction} />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});