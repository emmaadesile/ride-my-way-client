import axios from "axios";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import createRide from "../../actions/createRide";
import {
  CREATE_RIDE_LOADING,
  CREATE_RIDE_SUCCESS
} from "../../actionTypes/createRide";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe("Test CREATE_RIDE action", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  describe("Dispatch create ride", () => {
    it("it dispatches CREATE_RIDE_SUCCESS action", () => {
      const rideData = {
        location: "Ibadan",
        destination: "LA",
        datecreated: "12-9-2018",
        departuretime: "12AM",
        seatsavailable: "5"
      };
      const response = {
        status: 'Success',
        message: 'Ride created successfully'
      };
      axiosMock
        .onPost(`${__API__}/users/rides`, rideData)
        .reply(200, response)

      const expectedAction = [
        {
          type: CREATE_RIDE_LOADING,
          payload: true
        },
        {
          type: CREATE_RIDE_LOADING,
          payload: false
        },
        {
          type: CREATE_RIDE_SUCCESS,
          payload: 'Ride created successfully'
        }
      ];

      const store = mockStore({});
      return store.dispatch(createRide(rideData)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
