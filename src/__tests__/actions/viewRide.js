import axios from "axios";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import viewRide from "../../actions/viewRide";
import {
  VIEW_RIDE_ERROR,
  VIEW_RIDE_LOADING,
  // VIEW_RIDE_SUCCESS
} from "../../actionTypes/viewRide";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe("VIEW RIDE ACTION", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  describe("view ride", () => {
    it("dispatches VIEW_RIDE_SUCCESS", () => {
      const rideResponse = {
        location: "Ibadan",
        destination: "LA",
        datecreated: "12-9-2018",
        departuretime: "12AM",
        seatsavailable: "5"
      };
      axiosMock.onGet(`${__API__}/rides/1`).reply(200, rideResponse);

      const expectedAction = [
        {
          type: VIEW_RIDE_LOADING,
          payload: true
        },
        {
          type: VIEW_RIDE_LOADING,
          payload: false
        },
        // {
        //   type: VIEW_RIDE_SUCCESS,
        //   payload: rideResponse
        // }
      ];
      const store = mockStore({ viewRide: "" });
      return store.dispatch(viewRide(1)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
    });

    it("dispatches VIEW_RIDE_ERROR", () => {

      axiosMock.onGet(`${__API__}/rides/1`).reply(500, {});

      const expectedAction = [
        {
          type: VIEW_RIDE_LOADING,
          payload: true
        },
        {
          type: VIEW_RIDE_LOADING,
          payload: false
        },
        {
          type: VIEW_RIDE_ERROR,
          payload: {}
        },
        {
          type: VIEW_RIDE_ERROR,
          payload: 'Server is unreachable at the moment. Please try again later'
        }
      ];
      const store = mockStore({ viewRide: {}});
      return store.dispatch(viewRide(1)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
    });
  });
});