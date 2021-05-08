import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class BigMac extends Component {
  constructor() {
    super();
    this.state = {
      budget: '50',
      localResult: {},
      CountryList: [],
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3080/api/bigMac`)
      .then((res) => {
        this.setState({
          localResult: res.data.locationList[0],
          CountryList: res.data.locationList,
        });
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
                Please enter an amount of money in your local currency
              </p>

              <input
                type="text"
                placeholder="Total Big Mac Budget"
                name="budget"
                className="form-control"
                value={this.state.budget}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="LocalInfo container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                You could buy{' '}
                {Math.floor(
                  parseInt(this.state.budget) /
                    parseFloat(this.state.localResult['Local price'])
                )}{' '}
                Big Macs in your country with {this.state.budget}
              </h1>
              <h1 className="display-4 text-center">
                Your Dollar Purchasing Parity (PPP) is{' '}
                {this.state.localResult['Dollar PPP']}
              </h1>
            </div>
          </div>
        </div>
        <br />
        <div className="RandomComparison container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                Random Country:{' '}
                {this.state.CountryList[1]
                  ? this.state.CountryList[1].Country
                  : 'Random Country'}
              </h1>
              <h1 className="display-4 text-center">
                You could buy{' '}
                {this.state.CountryList[1]
                  ? Math.floor(
                      ((parseInt(this.state.budget) /
                        parseFloat(this.state.localResult['Local price'])) *
                        parseFloat(this.state.localResult['Dollar price'])) /
                        parseFloat(this.state.CountryList[1]['Dollar price'])
                    )
                  : 0}{' '}
                of Big Macs in{' '}
                {this.state.CountryList[1]
                  ? this.state.CountryList[1].Country
                  : 'Random Country'}{' '}
                with {this.state.budget}!
              </h1>
              <h1 className="display-4 text-center">
                Your {this.state.budget} is worth about{' '}
                {this.state.CountryList[1]
                  ? Math.floor(
                      (parseInt(this.state.budget) *
                        parseFloat(this.state.localResult['Dollar price'])) /
                        parseFloat(this.state.CountryList[1]['Dollar price'])
                    )
                  : 0}{' '}
                in{' '}
                {this.state.CountryList[1]
                  ? this.state.CountryList[1].Country
                  : 'Random Country'}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigMac;
