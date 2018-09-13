import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, CardSection, Button, Confirm } from './common';
//import { text } from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  };
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    //const { phone, shift } = this.props;
    //text(phone, `Your upcoming shift isn on ${shift}`);
  }

  onFirePress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    this.props.employeeDelete(this.props.employee.uid);
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button
            click={this.onButtonPress.bind(this)}
          >
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button click={this.onTextPress.bind(this)}>
            Text
          </Button>
          <Button click={this.onFirePress.bind(this)}>
            Set Fire To Employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onDecline={this.onDecline.bind(this)}
          onAccept={this.onAccept.bind(this)}
        >
          Are you sure you want to fire this person?
        </Confirm>
      
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
  };
};

export default connect(mapStateToProps, 
  { employeeUpdate, 
    employeeSave,
    employeeDelete 
  })(EmployeeEdit);
