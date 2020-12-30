import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import { Si1Password } from "react-icons/si";

import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../actions/auth";
import "./css/login.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.email, this.state.password))
        .then((response) => {
          history.push("/connexion");
          window.location.reload();
          //console.log(response);
        })
        .catch(() => {
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-img3-body">
        <Form
          onSubmit={this.handleLogin}
          ref={(c) => {
            this.form = c;
          }}
          className="login-form"
        >
          <div className="login-wrap">
            <p className="login-img">
              <AiFillLock />
            </p>
            <div className="input-group">
              <span className="input-group-addon">
                <i>
                  <AiOutlineMail />
                </i>
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>

            <div className="input-group">
              <span className="input-group-addon">
                <i>
                  <Si1Password />
                </i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="mot de passe"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
            <label className="checkbox">
              <input type="checkbox" value="remember-me" /> Souvenir de moi
              <span className="pull-right">
                {" "}
                <a href="/#"> Mot de passe oublié?</a>
              </span>
            </label>
            <button
              className="btn btn-dark btn-lg btn-block"
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Connexion</span>
            </button>
            <a
              href="/inscription"
              className="btn btn-danger btn-lg btn-block"
              type="submit"
            >
              Inscription
            </a>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </div>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
