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
  }
}

export default initialState;