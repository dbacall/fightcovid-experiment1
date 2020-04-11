import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions";
import { logoutUser } from "../actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // handlePasswordChange = ({ target }) => {
  //   this.setState({ password: target.value });
  // };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    this.props.loginUser(email, password);
    console.log(this.props.isAuthenticated);
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <h2>Sign in</h2>
          <form>
            <input
              type="text"
              id="email"
              label="Email Address"
              name="email"
              onChange={this.handleChange}
            />
            <input
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
            {loginError && <p>Incorrect email or password.</p>}
            <input type="submit" name="Submit" onClick={this.handleSubmit} />
          </form>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}
export default connect(mapStateToProps, { loginUser, logoutUser })(Login);
