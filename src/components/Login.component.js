import React from "react";
import "./css/login.css";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Si1Password } from "react-icons/si";

const Login = () => {
  return (
    <div className="login-img3-body">
      <form className="login-form">
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
              className="form-control"
              placeholder="Email"
              autoFocus
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
              placeholder="mot de passe"
            />
          </div>
          <label className="checkbox">
            <input type="checkbox" value="remember-me" /> Souvenir de moi
            <span className="pull-right">
              {" "}
              <a href="/#"> Mot de passe oublié?</a>
            </span>
          </label>
          <button className="btn btn-dark btn-lg btn-block" type="submit">
            Connexion
          </button>
          <button className="btn btn-danger btn-lg btn-block" type="submit">
            Inscription
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
