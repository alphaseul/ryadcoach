import axios from "axios";
import { API, Amplify } from "aws-amplify";
import awsmobile from "../aws-exports";

const API_URL = "http://82.165.184.180:1337/";
Amplify.configure(awsmobile);

class AuthService {
  login(email, password) {
    return API.post("User", "/users", {
      body: {
        identifier: email,
        password: password,
      },
    })
      .then((response) => {
        if (response.jwt) {
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("jwt", JSON.stringify(response.jwt));
        }
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
  }

  register(username, email, password) {
    return axios.post(API_URL + "users", {
      username: username,
      email: email,
      password: password,
      confirmed: true,
      role: {
        id: 1,
        name: "Authenticated",
        description: "Default role given to authenticated user.",
        type: "authenticated",
      },
    });
  }
}

export default new AuthService();
