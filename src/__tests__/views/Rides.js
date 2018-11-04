import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import toJson from 'enzyme-to-json';
import Rides from "../../views/Rides.jsx";

const mockStore = configureMockStore();
const store = mockStore();

const mockFunction = param => jest.fn(param);

describe("Rides View", () => {
  test("renders the rides page", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Rides fetchRides={mockFunction} />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Rides />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
