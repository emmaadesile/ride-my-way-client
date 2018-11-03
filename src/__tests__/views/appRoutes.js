import React from 'react';
import { shallow } from 'enzyme';
import AppRoutes from '../../AppRoutes';

describe('Form submit button component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AppRoutes />);

    expect(wrapper.exists()).toBe(true);
  });
});