import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress() {
    //Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const init = {
          core_liquid_balance: '',
          total_resources: {
            cpu_weight:'',
            net_weight:''
          }

    }
    const init_total_resources = {
          cpu_weight:'',
          net_weight:''
    }
    const cpu_weight = '';
    const net_weight = '';
    const { accountName } = this.props.account;
    const { core_liquid_balance, total_resources } = this.props.account.blockChainData || init;
    //const { cpu_weight, net_weight } = this.props.account.blockChainData.total_resources || init_total_resources;
    return (
    <TouchableWithoutFeedback
      onPress={this.onRowPress.bind(this)}
    >
    <View>
        <CardSection>
          <Text style={styles.titleStyle}>
            {accountName}
          </Text>
          <Text style={[styles.titleStyle, {textAlign: 'right'}]}>
            {core_liquid_balance}
          </Text>
        </CardSection>
        <CardSection>
        <Text style={styles.descStyle}>
            CPU STAKE:{total_resources.cpu_weight}
          </Text>
          <Text style={[styles.descStyle, {textAlign: 'right'}]}>
            NET STAKE:{total_resources.net_weight}
          </Text>
        </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1
  },
  descStyle: {
    fontSize: 12,
    paddingLeft: 15,
    flex: 1,
    color: '#333'
  }
};

export default ListItem;
