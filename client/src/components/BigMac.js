import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class BigMac extends Component {
  constructor() {
    super();
    this.state = {
      budget: '50',
      localResult: {},
      randomCountry: {},
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
          randomCountry: res.data.locationList[1],
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div className="BigMac">
        <br />
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="LocalInfo container">
              <div className="row">
                <div className="col-md-12 m-auto">
                  <h1 className="display-1 text-left">
                    {this.state.localResult.Country}
                  </h1>
                  <h1 className="display-4 text-left">
                    Big Macs with Budget:{' '}
                    {Math.floor(
                      parseInt(this.state.budget) /
                        parseFloat(this.state.localResult['Local price'])
                    )}{' '}
                  </h1>
                  <h1 className="display-4 text-left">
                    Dollar Purchasing Parity (PPP):{' '}
                    {this.state.localResult['Dollar PPP']}
                  </h1>
                </div>
              </div>
            </div>
            <br />
            <div className="RandomComparison container">
              <div className="row">
                <div className="col-md-12 m-auto">
                  <h1 className="display-2 text-left">
                    {this.state.randomCountry.Country}
                  </h1>
                  <h1 className="display-4 text-left">
                    Big Macs with Budget:{' '}
                    {Math.floor(
                      ((parseInt(this.state.budget) /
                        parseFloat(this.state.localResult['Local price'])) *
                        parseFloat(this.state.localResult['Dollar price'])) /
                        parseFloat(this.state.randomCountry['Dollar price'])
                    )}
                  </h1>
                  <h1 className="display-4 text-left">
                    Your {this.state.budget} is worth about{' '}
                    {Math.floor(
                      (parseInt(this.state.budget) *
                        parseFloat(this.state.localResult['Dollar price'])) /
                        parseFloat(this.state.randomCountry['Dollar price'])
                    )}{' '}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 m-auto">
            <div className="UserInfo container">
              <div className="row">
                <label className="display-3" for="budget">
                  Big Mac Budget
                </label>
                <input
                  type="number"
                  name="budget"
                  className="form-control"
                  value={this.state.budget}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigMac;
