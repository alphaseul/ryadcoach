import React from "react";
import "./css/dashboard.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <div>
      <section id="about" className="about conntainer">
        <div className="container">
          <div className="section-title">
            <h2>Dashboard</h2>
            <p>
              Bienvenue <b>{user.username}</b>
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="assets/img/profile-img.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
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
            </div>
          </div>
        </div>
      </section>
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Votre Activité</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="section-title row">
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="icofont-simple-smile"></i>
                <span data-toggle="counter-up">232</span>
                <p>
                  <strong>Happy Clients</strong>
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="count-box">
                <i className="icofont-document-folder"></i>
                <span data-toggle="counter-up">521</span>
                <p>
                  <strong>Projects</strong>
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="count-box">
                <i className="icofont-live-support"></i>
                <span data-toggle="counter-up">1,463</span>
                <p>
                  <strong>Hours Of Support</strong>
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="count-box">
                <i className="icofont-users-alt-5"></i>
                <span data-toggle="counter-up">15</span>
                <p>
                  <strong>Hard Workers</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
