import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import axios from "axios";
import fetchAllRides from "../../actions/rides";
import {
  FETCH_ALL_RIDES_LOADING,
  FETCH_ALL_RIDES_SUCCESS
} from "../../actionTypes/rides";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe("Get ride ACTION", () => {
  afterEach(() => {
    axiosMock.reset();
  });
  describe("handle get all rides", () => {
    it("dispatches FETCH_ALL_RIDES_SUCCESS", () => {
      axiosMock.onGet("http://localhost:8000/rides").reply(200, {
        status: "Success",
        data: [
          {
            ride_id: 1,
            location: "Ijebu",
            destination: "Ibadan",
            datecreated: "12-11-2018",
            departuretime: "5pm",
            seatsavailable: 6
          }
        ]
      });

      const expectedAction = [
        {
          type: FETCH_ALL_RIDES_LOADING,
          payload: true
        },
        {
          type: FETCH_ALL_RIDES_LOADING,
          payload: false
        },
        {
          type: FETCH_ALL_RIDES_SUCCESS,
        }
      ];

      const store = mockStore({});
      return store.dispatch(fetchAllRides()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
