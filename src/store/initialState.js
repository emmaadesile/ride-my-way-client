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
  viewRide: {
    data: [],
    loading: false,
    error: ''
  },
  createRide: {
    message: '',
    loading: false,
    error: '',
  },
  joinRide: {
    loading: '',
    message: '',
    error: '',
  },
  rideRequests: {
    loading: false,
    requests: [],
    error: ''
  }
}

export default initialState;