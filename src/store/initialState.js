const initialState = {
  auth: {
    user: {},
    signup: {
      loading: false,
      error: '',
      message: ''
    },
    signin: {
      loading: false,
      error: '',
      message: ''
    },
    isAuthenticated: false
  },
  rides: {
    data: [],
    loading: false,
    error: ''
  },
  singleRide: {
    rideDetails: {},
    loading: false,
    error: ''
  }
}

export default initialState;