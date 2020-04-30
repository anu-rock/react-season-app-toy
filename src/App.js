import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
  state = { lat: null, errorMsg: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      this._onGeoPositionSuccess,
      this._onGeoPositionError
    );
  }

  _onGeoPositionSuccess = (position) => {
    this.setState({ lat: position.coords.latitude });
  };

  _onGeoPositionError = (error) => {
    this.setState({ errorMsg: error.message });
  };

  _body() {
    if (this.state.lat && !this.state.errorMsg) {
      return (
        <SeasonDisplay lat={this.state.lat} month={new Date().getMonth()} />
      );
    } else if (!this.state.lat && this.state.errorMsg) {
      return <Loader message="Please allow access to location" />;
    }

    return <Loader />;
  }

  render() {
    return this._body();
  }
}

export default App;
