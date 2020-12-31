import React, { Component } from "react";
import "./css/login.css";
import { MdAccountCircle } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { Si1Password } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { connect } from "react-redux";
import { register } from "../actions/auth";
import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champ est requis
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
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

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(this.state.username, this.state.email, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      <div className="login-img3-body">
        <Form
          onSubmit={this.handleRegister}
          ref={(c) => {
            this.form = c;
          }}
          className="login-form"
        >
          {!this.state.successful && (
            <div className="login-wrap">
              <p className="login-img">
                <MdAccountCircle />
              </p>
              <div className="input-group">
                <span className="input-group-addon">
                  <i>
                    <BiUser />
                  </i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  placeholder="Nom d'utilisateur"
                  onChange={this.onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i>
                    <AiOutlineMail />
                  </i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.onChangeEmail}
                  validations={[required, email]}
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
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  placeholder="Mot de passe "
                  onChange={this.onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <input type="checkbox" value="remember-me" required /> Accepter
              Les conditions générales d'utilisation
              <button className="btn btn-danger btn-lg btn-block" type="submit">
                Commencer
              </button>
              <label className="checkbox">
                <span className="pull-right mt-2">
                  {" "}
                  <a href="/connexion"> déja un compte ?</a>
                </span>
              </label>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  this.state.successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert"
              >
                <b>Bienvenue {message}</b>
              </div>
            </div>
          )}
          <CheckButton
            style={{ display: "none" }}
            ref={(c) => {
              this.checkBtn = c;
            }}
          />
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
