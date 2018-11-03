import rides from "../../reducers/rides";
import * as types from "../../actionTypes/rides";

describe("rides reducer", () => {
  it("should return initial state", () => {
    expect(rides(undefined, {})).toEqual({
      data: [],
      loading: false,
      error: ""
    });
  });

  it("should handle FETCH_RIDE_LOADING", () => {
    const action = { type: types.FETCH_ALL_RIDES_LOADING, payload: true };
    expect(rides({}, action)).toEqual({
      loading: true
    });
  });

  it("should handle FETCH_RIDE_SUCCESS", () => {
    const action = {
      type: types.FETCH_ALL_RIDES_SUCCESS,
      payload: {
        ride_id: 1,
        location: "ET",
        destination: "VI",
        datecreated: "12-12-2018",
        departuretime: "12am",
        seatsavaialable: 5
      }
    };
    expect(rides({}, action)).toEqual({
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

  it("shound handle FETCH_RIDE_ERROR", () => {
    const action = {
      type: types.FETCH_ALL_RIDES_ERROR,
      payload: "Request to fetch all rides failed"
    };
    expect(rides({}, action)).toEqual({
      error: "Request to fetch all rides failed"
    });
  });
});
