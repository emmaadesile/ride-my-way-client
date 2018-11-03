import viewRide from "../../reducers/viewRide";
import * as types from "../../actionTypes/viewRide";

describe("view ride reducer", () => {
  it("should return initial state", () => {
    expect(viewRide(undefined, {})).toEqual({
      data: [],
      loading: false,
      error: ""
    });
  });

  it("should handle VIEW_RIDE_LOADING", () => {
    const action = { type: types.VIEW_RIDE_LOADING, payload: true };
    expect(viewRide({}, action)).toEqual({ loading: true });
  });

  it("should handle VIEW_RIDE_SUCESS", () => {
    const action = {
      type: types.VIEW_RIDE_SUCCESS,
      payload: {
        ride_id: 1,
        location: "ET",
        destination: "VI",
        datecreated: "12-12-2018",
        departuretime: "12am",
        seatsavaialable: 5
      }
    };
    expect(viewRide({}, action)).toEqual({
      data: {
        ride_id: 1,
        location: "ET",
        destination: "VI",
        datecreated: "12-12-2018",
        departuretime: "12am",
        seatsavaialable: 5
      }
    });
  });

  it("should handle VIEW_RIDE_ERROR", () => {
    const action = {
      type: types.VIEW_RIDE_ERROR,
      payload: "Server is currently unavailable, Please try again later"
    };
    expect(viewRide({}, action)).toEqual({
      error: "Server is currently unavailable, Please try again later"
    });
  });
});
