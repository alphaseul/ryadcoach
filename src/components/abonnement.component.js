import React from "react";

const Abonnement = () => {
  return (
    <section
      id="pricing"
      className="pricing"
      style={{ backgroundColor: "#e6e6e6" }}
    >
      <div className="container">
        <div>
          <h2>Tarifs</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="box">
              <h3>Pack 1</h3>
              <h4>
                <sup>€</sup>0<span> / mois</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="/inscription" className="btn-buy">
                  Commencer
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="box featured">
              <h3>Pack 2</h3>
              <h4>
                <sup>€</sup>19<span> / mois</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="/inscription" className="btn-buy">
                  Commencer
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <h3>Pack 3</h3>
              <h4>
                <sup>€</sup>29<span> / mois</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="/inscription" className="btn-buy">
                  Commencer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abonnement;
