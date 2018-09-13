import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Spinner } from './common';
import { accountUpdate, accountAdd } from '../actions';
import AccountForm from './AccountForm';


class AddAccount extends Component {
  onButtonPress() {
    const { accountName } = this.props;
    console.log(accountName);
    //debugger;
    this.props.accountAdd({ accountName });
  }

  renderButton() {
    if (this.props.loading) {
        return <Spinner size='small' />;
    }

    return (
    
      <Button
       click={this.onButtonPress.bind(this)}
      >
          Add account
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <AccountForm {...this.props} />

        <Text style={styles.errorStyle}>
                    {this.props.code}
        </Text>

        <Text style={styles.errorStyle}>
            {this.props.error}
        </Text>

        <CardSection>
         {this.renderButton()}
        </CardSection>
      
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};

const mapStateToProps = (state) => {
  const { accountName, loading, error, code } = state.accountForm;
  return {
   accountName,
   loading,
   error,
   code
  };
};

export default connect(mapStateToProps, { accountUpdate, accountAdd })(AddAccount);
