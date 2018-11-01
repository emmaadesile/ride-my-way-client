import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import signup from "../../actions/signup";
import rideLogo from "../../assets/img/rideLogo.png";
import UserValidation from "../../utils/userValidation";

class Signup extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    loading: false,
    error: {}
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: {}
    });
  };

  validateSignup = () => {
    const { username, email, password, confirmPassword } = this.state;

    if (UserValidation.validateUsername(username) === false) {
      this.setState({
        error: {
          username: "Username can only contain numbers and letters"
        }
      });
      return false;
    }

    if (password.length < 6 || password.length > 20) {
      this.setState({
        error: {
          password:
            "Password can only have a min of 6 characters and max of 20 characters"
        }
      });
      return false;
    }

    if (UserValidation.validateEmail(email) === false) {
      this.setState({
        error: {
          email: "Email is invalid"
        }
      });
    }

    if (password.trim() !== confirmPassword.trim()) {
      this.setState({
        error: {
          password: "Passwords do not match"
        }
      });
      return false;
    }
    return true;
  };

  clearErrors = () => {
    this.setState({
      error: {}
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { registerUser } = this.props;
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      confirmPassword
    } = this.state;
    const user = {
      firstname,
      lastname,
      username,
      email,
      password,
      confirmPassword
    };

    if (this.validateSignup() === false) return;
    registerUser(user);
  };

  render() {
    const { loading, stateError, isAuthenticated } = this.props;
    const { error } = this.state;
    console.log(isAuthenticated);

    if (isAuthenticated) {
      this.props.history.push('/');
    }
    return (
      <Fragment>
          <div className="wrapper2">
            <div className="form-wrapper">
              <Link to="/">
                <img
                  src={rideLogo}
                  alt="ride-my-way logo"
                  className="ride-logo"
                />
              </Link>
              <form className="form signup-form" onSubmit={this.handleSubmit}>
                <label className="form-label" htmlFor="create-account">
                  Create an account
                </label>
                {stateError ? <div className='errorMessage'>{stateError}</div> : null}
                {Object.entries(error).length === 0 ? null : (
                  <div>
                    {Object.entries(error).map((err, index) => (
                      <div className="errorMessage" key={index}>
                        {err[1]}
                      </div>
                    ))}
                  </div>
                )}
                <input
                  className="form-control firstname"
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="form-control lastname"
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="form-control username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  required
                  pattern=".{4,}"
                  title="4 characters minumum"
                />
                <input
                  className="form-control email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="form-control password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  required
                  title="6 characters minumum"
                  min="6"
                  max="20"
                />
                <input
                  className="form-control confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                  required
                />

                <button
                  disabled={loading}
                  className="btn btn__primary btn__inline signup-btn"
                  type="submit"
                >
                  Signup
                </button>
                <p>
                  Already Registered?
                  <Link to="/auth/login">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    loading: auth.signup.loading,
    stateError: auth.signup.error,
    isAuthenticated: auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => ({
  registerUser(user) {
    return dispatch(signup(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
