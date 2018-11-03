import signup from "../../reducers/signup";
import * as types from "../../actionTypes/signup";

describe("signup reducer", () => {
  it("should return initial state", () => {
    expect(signup(undefined, {})).toEqual({
      loading: false,
      error: "",
      message: ""
    });
  });

  it("should handle SINGUP_LOADING", () => {
    const action = { type: types.SIGNUP_LOADING, payload: true };
    expect(signup({}, action)).toEqual({
      loading: true,
      error: ""
    });
  });

  it("should handle SINGUP_ERROR", () => {
    const action = { type: types.SIGNUP_ERROR, payload: { error: "error" } };
    expect(signup({}, action)).toEqual({
      error: "error"
    });
  });

  it("should handle SIGNUP_SUCCESS", () => {
    const action = {
      type: types.SIGNUP_SUCCESS,
      payload: "Signup was successful"
    };
    expect(signup({}, action)).toEqual({
      message: "Signup was successful"
    });
  });
});
