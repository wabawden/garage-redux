import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions';
import Aside from '../components/aside';

class CarsIndex extends Component {
  componentWillMount() {
    console.log(this.props.garage);
    this.props.fetchCars(this.props.garage);
  }
  render() {
    console.log(this);
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,

      this.props.cars.map((car) => {
        return (
          <Link to={`/cars/${car.id}`} key={car.id}>
            <div className="car-item">
              <h3>{car.brand} - {car.model}</h3>
              <p>Owner: <strong>{car.owner}</strong></p>
            </div>
          </Link>
        );
      })];
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
