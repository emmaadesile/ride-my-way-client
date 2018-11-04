import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

import Footer from "../../components/common/Footer";

describe("Footer component test", () => {
  it("renders the footer component", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
