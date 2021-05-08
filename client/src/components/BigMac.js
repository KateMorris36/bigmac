import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class BigMac extends Component {
  constructor() {
    super();
    this.state = {
      budget: '',
      localResult: {},
      CountryList: [],
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log('componentDidMount');
    axios
      .get(`http://localhost:3080/api/bigMac`)
      .then((res) => {
        console.log(res);
        this.setState({
          localResult: res.data.locationList[0],
          CountryList: res.data.locationList,
        });
        console.log(this.state.CountryList);
      })
      .catch((err) => {
        console.log('Error in BigMac!');
      });
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="BigMac">
        <div className="UserInfo container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                You are in {this.state.localResult.Country}
              </h1>
              <p className="lead text-center">
                Please enter an amount of money in your local
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Total Big Mac Budget"
                    name="budget"
                    className="form-control"
                    value={this.state.budget}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="LocalInfo container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                You could buy [#] of Big Macs in your country
              </h1>
              <h1 className="display-4 text-center">
                Your Dollar Purchasing Parity (PPP) is [#]
              </h1>
            </div>
          </div>
        </div>
        <div className="RandomComparison container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                Random Country: [RANDOM COUNTRY]
              </h1>
              <h1 className="display-4 text-center">
                You could buy [#] of Big Macs in [RAND COUNTRY] with [INPUT]!
              </h1>
              <h1 className="display-4 text-center">
                Your [INPUT] is worth about [#] in [RAND COUNTRY]
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigMac;
