import createRide from "../../reducers/createRide";
import * as types from "../../actionTypes/createRide";

describe("create ride reducer", () => {
  it("should handle initial state", () => {
    expect(createRide(undefined, {})).toEqual({
      message: "",
      loading: false,
      error: ""
    });
  });

  it("should handle CREATE_RIDE_LOADING", () => {
    const action = { type: types.CREATE_RIDE_LOADING, payload: true };
    expect(createRide({}, action)).toEqual({
      loading: true
    });
  });

  it("should handle CREATE_RIDE_SUCCESS", () => {
    const action = {
      type: types.CREATE_RIDE_SUCCESS,
      payload: "Ride was successfully created"
    };
    expect(createRide({}, action)).toEqual({
      message: "Ride was successfully created"
    });
  });

  it("should handle CREATE_RIDE_ERROR", () => {
    const action = {
      type: types.CREATE_RIDE_ERROR,
      payload: "error"
    };
    expect(createRide({}, action)).toEqual({
      error: "error"
    });
  });
});
