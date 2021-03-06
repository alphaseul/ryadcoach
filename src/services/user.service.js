import axios from "axios";
import authHeader from "./auth-header";
import { API, Amplify } from "aws-amplify";
import awsmobile from "../aws-exports";

Amplify.configure(awsmobile);

const API_URL = "http://82.165.184.180:1337/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "entreprises", { headers: authHeader() });
  }

  getUserBoard() {
    return axios.get(API_URL + "clients", { headers: authHeader() });
  }

  getAnnonce() {
    return axios.get(API_URL + "annonces", { headers: authHeader() });
  }
  getClients() {
    return axios.get(API_URL + "clients", { headers: authHeader() });
  }
  getVideos() {
    return API.get("videos", "/videos");
  }
}

export default new UserService();
