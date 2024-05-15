import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    return (
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={this.props.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <Link to={this.props.link} className="btn btn-primary">
              Details
            </Link>
            <Routes>
              <Route path={this.props.link} element={<div>Details Component</div>} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
