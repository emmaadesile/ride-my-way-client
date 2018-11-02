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
      axiosMock
        .onPost("https://emmaadesile-ridemyway.herokuapp.com/auth/signup", user)
        .reply(200, "Sign up successful");

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
  });
});