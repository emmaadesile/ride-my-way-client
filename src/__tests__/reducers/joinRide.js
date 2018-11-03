import joinRide from "../../reducers/joinRide";
import * as types from "../../actionTypes/joinRide";

describe("join ride reducer", () => {
  it("should return initial state", () => {
    expect(joinRide(undefined, {})).toEqual({
      loading: "",
      message: "",
      error: ""
    });
  });

  it("shound handle JOIN_RIDE_LOADING", () => {
    const action = { type: types.JOIN_RIDE_LOADING, payload: true };
    expect(joinRide({}, action)).toEqual({
      loading: true
    });
  });

  it("should handle JOIN_RIDE_SUCCESS", () => {
    const action = {
      type: types.JOIN_RIDE_SUCCESS,
      payload: "Request to join ride pending approval from ride owner"
    };
    expect(joinRide({}, action)).toEqual({
      message: "Request to join ride pending approval from ride owner"
    });
  });

  it("should handle JOIN_RIDE_ERROR", () => {
    const action = {
      type: types.JOIN_RIDE_ERROR,
      payload: "Server is unreachable at the moment. Please try again later"
    };
    expect(joinRide({}, action)).toEqual({
      error: "Server is unreachable at the moment. Please try again later"
    });
  });
});