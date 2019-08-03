import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Home from "./Home";
import Video from "./Video";
import Story from "./Story";

const Routes = props => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="fab fa-instagram ig" />InstaGan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <NavLink
                className="nav-item nav-link small"
                exact={true}
                activeClassName="active"
                to="/"
              >
                Instagram Photos Downloader
              </NavLink>
              <NavLink
                className="nav-item nav-link small"
                exact={true}
                activeClassName="active"
                to="/videodownloader"
              >
                Instagram Videos Downloader
              </NavLink>
              <NavLink
                className="nav-item nav-link small"
                exact={true}
                activeClassName="active"
                to="/storydownloader"
              >
                Instagram Stories Downloader
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/videodownloader" component={Video} />
      <Route path="/storydownloader" component={Story} />
    </Router>
  );
};

export default Routes;
