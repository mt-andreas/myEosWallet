import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, } from 'react-native';
import { accountUpdate } from '../actions';
import { CardSection, Input } from './common';

class AccountForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input 
            label="Account name"
            placeholder="EOS account name"
            value={this.props.accountName}
            onChangeText={text => this.props.accountUpdate({ prop: 'accountName', value: text })}
            autoCapitalize="none"
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { accountName } = state.accountForm;
  return { accountName };
};

export default connect(mapStateToProps, { accountUpdate })(AccountForm);
