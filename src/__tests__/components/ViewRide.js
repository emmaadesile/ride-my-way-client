import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import toJson from 'enzyme-to-json';
import ViewRide from '../../components/ViewRide';

const mockStore = configureMockStore();
const store = mockStore();

const mockFunction = param => jest.fn(param)

describe("View ride Component", () => {
  test("renders the Navbar commpinent", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ViewRide fetchRideDetails={mockFunction}/>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ViewRide />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
