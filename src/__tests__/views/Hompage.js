import React from "react";
import { shallow } from "enzyme";
import Homepage from "../../views/Homapage/Homepage";

describe("Homepage view", () => {
  test("renders the homepage component", () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.exists()).toBe(true);
  });
});
