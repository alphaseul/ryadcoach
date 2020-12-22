import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>
                Ryad Coach Sportif<span>.</span>
              </h3>
              <p>
                xxxxxxxxxxxxx <br />
                xxxxxxxxxxxx
                <br />
                xxxxxxxxx
                <br />
                <br />
                <strong>Phone:</strong> xxxxxxxxxxxxxx
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Liens Utiles</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Accueil</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">A propos</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>

                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Notre Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container d-md-flex py-4">
        <div class="me-md-auto text-center text-md-left">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>qrcode-protect</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0"></div>
      </div>
    </footer>
  );
}

export default Footer;
