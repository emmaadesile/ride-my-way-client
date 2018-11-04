import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import signin from "../../actions/signin";
import Loading from '../../components/Loading/Loading.jsx';
import rideLogo from "../../assets/img/rideLogo.png";

class Signin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: {}
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const user = { email, password };
    const { loginUser } = this.props;

    loginUser(user);
  };

  render() {
    const { stateError, isAuthenticated, loading } = this.props;

    if (isAuthenticated) {
      this.props.history.push("/");
    }

    return (
      <div className="wrapper2">
        {loading ? <Loading /> : null}
        <div className="form-wrapper">
          <Link to="/">
            <img src={rideLogo} alt="logo" className="ride-logo" />
          </Link>
          <form
            className="form signin-form"
            style={{ alignSelf: "start" }}
            onSubmit={this.handleSubmit}
          >
            <label className="form-label" htmlFor="signin">
              Login
            </label>
            {stateError ? (
              <div className="errorMessage">{stateError}</div>
            ) : null}
            <input
              className="form-control email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              required
            />
            <input
              className="form-control password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              required
            />
            <button className="btn btn__primary btn__inline signin-btn">
              Sign In
            </button>
            <p>
              Not a member?
              <Link to="/auth/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;

  return {
    loading: auth.signin.loading,
    stateError: auth.signin.error,
    message: auth.signin.message,
    isAuthenticated: auth.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => ({
  loginUser(user) {
    return dispatch(signin(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
