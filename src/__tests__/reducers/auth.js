import auth from "../../reducers/auth";
import * as types from "../../actionTypes/auth";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(auth(undefined, {})).toEqual({
      isAuthenticated: false,
      signin: { error: "", loading: false, message: "" },
      signup: { error: "", loading: false, message: "" },
      user: {}
    });
  });

  it("should handle SET_CURRENT_USER", () => {
    const action = {
      type: types.SET_CURRENT_USER,
      payload: { id: 1, name: "Davinci" }
    };
    expect(auth({}, action)).toEqual({
      isAuthenticated: true,
      user: {
        id: 1,
        name: "Davinci"
      }
    });
  });

  it("should handle LOG_OUT_USER", () => {
    const action = { type: types.LOGOUT_USER };
    expect(auth({}, action)).toEqual({
      isAuthenticated: false,
      user: {}
    });
  });
});
