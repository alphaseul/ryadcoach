import React from "react";
import "./css/dashboard.css";
import img from "../profil.png";

const Dashboard = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <div style={{ backgroundColor: "#e6e6e6", height: "100%" }}>
      <section id="about" className="about conntainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex  column align-items-center">
              <img
                src={
                  user.photo_profil
                    ? "http://82.165.184.180:1337" + user.photo_profil.url
                    : img
                }
                className="img-fluid"
                alt=""
                width="250px"
                style={{ marginLeft: "30%" }}
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Mes Informations</h3>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>date de naissance:</strong> XX XX XXXX
                    </li>

                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Tel:</strong> +33 XXXXXXXXX
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Age:</strong> XX
                    </li>

                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Email:</strong> {user.email}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-3">
                <h3>Mes Statistiques</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <span>232</span>
                        <p>
                          <strong>XXXXXXXXX</strong>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <span>521</span>
                        <p>
                          <strong>XXXXXXXXX</strong>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <span>1,463</span>
                        <p>
                          <strong>XXXXXXXXX</strong>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <span>15</span>
                        <p>
                          <strong>XXXXXXXXX</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
