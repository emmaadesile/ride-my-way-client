import React from "react";
import { shallow } from "enzyme";
import Loading from "../../components/Loading/Loading";

describe("Loading component", () => {
  test("renders the Loading component", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.exists()).toBe(true);
  });
});
