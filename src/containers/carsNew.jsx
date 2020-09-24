import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="Model">Model</label>
          <Field
            className="form-control"
            label="Model"
            name="model"
            component="textarea"
            rows="8"
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarsForm' })(
  connect(null, { createCar })(CarsNew)
);
