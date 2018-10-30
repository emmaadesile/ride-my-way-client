const initialState = {
  auth: {
    user: {},
    signup: {
      loading: false,
      error: ''
    },
    signin: {
      loading: false,
      error: ''
    },
    isAuthenticated: false
  }
}

export default initialState;