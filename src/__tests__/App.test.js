import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';


describe("Tests for App component", () => {  
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe("Snapshot testing for App", () => {
  const app = create(<App />);
  expect(app.toJSON()).toMatchSnapshot();
})