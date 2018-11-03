import signin from "../../reducers/signin";
import * as types from "../../actionTypes/signin";

describe("signin reducer", () => {
  it("should return initial state", () => {
    expect(signin(undefined, {})).toEqual({
      loading: false,
      error: "",
      message: ""
    });
  });

  it("should handle SINGIN_LOADING", () => {
    const action = { type: types.SIGNIN_LOADING, payload: true };
    expect(signin({}, action)).toEqual({
      loading: true,
    });
  });

  it("should handle SINGIN_ERROR", () => {
    const action = { type: types.SIGNIN_ERROR, payload: 'error' };
    expect(signin({}, action)).toEqual({
      error: "error"
    });
  });

  it("should handle SIGNUP_SUCCESS", () => {
    const action = {
      type: types.SIGNIN_SUCCESS,
      payload: "Signin was successful"
    };
    expect(signin({}, action)).toEqual({
      message: "Signin was successful"
    });
  });
});