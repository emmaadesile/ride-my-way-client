import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Navbar from "../../components/common/Navbar";

const mockStore = configureMockStore();
const store = mockStore();

describe("Navbar Component", () => {
  test("renders the Navbar commpinent", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
