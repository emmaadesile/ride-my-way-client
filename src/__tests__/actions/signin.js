import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import axios from "axios";
import signin from "../../actions/signin";
import {
  SIGNIN_LOADING,
  SIGNIN_SUCCESS
} from "../../actionTypes/signin";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe("signup new user", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  describe("handle signin", () => {
    it("dispatches SIGNUP_SUCCESS action", () => {
      const user = {
        email: "johndoe@mail.com",
        password: "johndoe"
      };
      axiosMock.onPost(`${__API__}/auth/signin`, user).reply(200, {
        message: "Login Successful",
        status: "Success",
        userToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsidXNlcl9pZCI6MTA4LCJmaXJzdG5hbWUiOiJyb3NlIiwibGFzdG5hbWUiOiJtYXJ5IiwidXNlcm5hbWUiOiJyb3NlbWFyeSIsImVtYWlsIjoicm9zZW1hcnlAbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRVMFVRdDhsRmZvQW5LbEZ3aHFPaFUuaE5UNEJGS1hlOTFnTy5JT09ETTliMWM5YjFwTUcwUyJ9LCJpYXQiOjE1NDExNTgyMTYsImV4cCI6MTU0MTI0NDYxNn0.uH0yEbtBNC-1-wKITYUTjjYJwdEmEJIqf_2hAFQdVMc"
      });

      const expectedAction = [
        {
          type: SIGNIN_LOADING,
          payload: true
        },
        {
          type: SIGNIN_SUCCESS,
          payload: {
            message: "Login Successful",
            status: "Success",
            userToken:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsidXNlcl9pZCI6MTA4LCJmaXJzdG5hbWUiOiJyb3NlIiwibGFzdG5hbWUiOiJtYXJ5IiwidXNlcm5hbWUiOiJyb3NlbWFyeSIsImVtYWlsIjoicm9zZW1hcnlAbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRVMFVRdDhsRmZvQW5LbEZ3aHFPaFUuaE5UNEJGS1hlOTFnTy5JT09ETTliMWM5YjFwTUcwUyJ9LCJpYXQiOjE1NDExNTgyMTYsImV4cCI6MTU0MTI0NDYxNn0.uH0yEbtBNC-1-wKITYUTjjYJwdEmEJIqf_2hAFQdVMc"
          }
        }
      ];

      const store = mockStore({ auth: { user: {} } });
      return store.dispatch(signin(user)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
