import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Route from "./Route";
import RouteSide from "./RouteSideBar";
import { history } from "./helpers/history";
import { clearMessage } from "./actions/message";
import { logout } from "./actions/auth";
import { connect } from "react-redux";
import SideBar from "./SideBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined,
    };
    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;
    document.title = "QR-code protect";

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        {currentUser ? (
          <div>
            <SideBar logout={this.logOut} />
            <RouteSide />
          </div>
        ) : (
          <div>
            <NavBar />
            <Route />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
