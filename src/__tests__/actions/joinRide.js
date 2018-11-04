import axios from "axios";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import joinRide from "../../actions/joinRide";
import {
  JOIN_RIDE_LOADING,
} from "../../actionTypes/joinRide";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe("JOIN RIDE ACTIONS", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  describe("join ride", () => {
    it("dispatches join ride SUCCESS", () => {
      axiosMock
        .onPost(`${__API__}/rides/1/requests`, {})
        .reply(200, {});

      const expectedAtion = [
        { type: JOIN_RIDE_LOADING, payload: true},
        { type: JOIN_RIDE_LOADING, payload: false },
        // { type: JOIN_RIDE_SUCCESS, payload: response}
      ];
      const store = mockStore({});
      return store.dispatch(joinRide(1)).then(() => {
        expect(store.getActions()).toEqual(expectedAtion);
      });
    });

    it("dispatches join ride ERROR", () => {
      axiosMock
        .onPost(`${__API__}/rides/1/requests`, {})
        .reply(200, {});

      const expectedAtion = [
        { type: JOIN_RIDE_LOADING, payload: true},
        { type: JOIN_RIDE_LOADING, payload: false },
        // { type: JOIN_RIDE_ERROR, payload: 'error'}
      ];
      const store = mockStore({ joinRide: {}});
      return store.dispatch(joinRide(1)).then(() => {
        expect(store.getActions()).toEqual(expectedAtion);
      });
    });
  });
});
