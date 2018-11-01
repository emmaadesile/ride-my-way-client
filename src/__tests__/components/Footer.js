import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/common/Footer";

describe("Footer component test", () => {
  it("renders the footer component", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
});
