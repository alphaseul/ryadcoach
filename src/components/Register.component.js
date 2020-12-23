import React from "react";
import "./css/login.css";
import { MdAccountCircle } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { Si1Password } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

const Register = () => {
  return (
    <div className="login-img3-body">
      <form className="login-form">
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
              placeholder="Nom"
              autoFocus
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i>
                <BiUser />
              </i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Prénom"
              autoFocus
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
          <input type="checkbox" value="remember-me" /> Accepter Les conditions
          générales d'utilisation
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
      </form>
    </div>
  );
};

export default Register;
