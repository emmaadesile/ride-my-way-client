import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import Loading from "../../components/Loading/Loading";

describe("Loading component", () => {
  test("renders the Loading component", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
