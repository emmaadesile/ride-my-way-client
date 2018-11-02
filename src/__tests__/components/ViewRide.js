import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
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
});
