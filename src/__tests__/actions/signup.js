import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import axios from "axios";
import signup from "../../actions/signup";
import {
  SIGNUP_LOADING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS
} from "../../actionTypes/signup";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe("signup new user", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  describe("handle signup", () => {
    it("dispatches SIGNUP_SUCCESS", () => {
      const user = {
        firstname: "john",
        lastname: "doe",
        username: "johndoe",
        email: "johndoe@mail.com",
        password: "johndoe"
      };
      axiosMock.onPost("http://localhost:8000/auth/signup", user).reply(200, {
        message: "Sign up successful",
        status: "Success",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsidXNlcl9pZCI6MTA4LCJmaXJzdG5hbWUiOiJyb3NlIiwibGFzdG5hbWUiOiJtYXJ5IiwidXNlcm5hbWUiOiJyb3NlbWFyeSIsImVtYWlsIjoicm9zZW1hcnlAbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRVMFVRdDhsRmZvQW5LbEZ3aHFPaFUuaE5UNEJGS1hlOTFnTy5JT09ETTliMWM5YjFwTUcwUyJ9LCJpYXQiOjE1NDExNTgyMTYsImV4cCI6MTU0MTI0NDYxNn0.uH0yEbtBNC-1-wKITYUTjjYJwdEmEJIqf_2hAFQdVMc"
      });

      const expectedAction = [
        {
          type: SIGNUP_LOADING,
          payload: true
        },
        {
          type: SIGNUP_LOADING,
          payload: false
        },
        {
          type: SIGNUP_SUCCESS,
          payload: "Sign up successful"
        }
      ];

      const store = mockStore({ auth: { signup: {} } });
      return store.dispatch(signup(user)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it("dispatches SIGNUP_ERROR", () => {
      const user = {
        firstname: "john",
        lastname: "doe",
        username: "johndoe",
        email: "johndoe@mail.com",
        password: "johndoe"
      };
      axiosMock.onPost("http://localhost:8000/auth/signup", user).reply(500, {
        error: "User already exists",
        status: "Failed"
      });

      const expectedAction = [
        {
          type: SIGNUP_LOADING,
          payload: true
        },
        {
          type: SIGNUP_LOADING,
          payload: false
        },
        {
          type: SIGNUP_ERROR,
          payload: { error: "User already exists", status: "Failed" }
        }
      ];

      const store = mockStore({ auth: { signup: {} } });
      return store.dispatch(signup(user)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
