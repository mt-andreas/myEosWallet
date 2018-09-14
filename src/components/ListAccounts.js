import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { accountsFetch, accountsBCFetch } from '../actions';
import ListItem from './ListItem';
import { get_info } from './../utils/eosjs-client';


class ListAccounts extends Component {
    componentWillMount() {
        this.props.accountsFetch();
        get_info().then(info => {
            console.log("mc data",info);
          });
    }

    renderRow(account) {
        console.log("account", account.item);
        return <ListItem account={account.item}/>;
    }

    render() {
        console.log("props", this.props.accounts);
        return (
           <FlatList 
            data={this.props.accounts}
            renderItem={this.renderRow}
            keyExtractor={(key) => key.uid.toString()}
           />
        );
    }
}
const mapStateToProps = (state) => {
   
    const bc = state.blockChainData;
    const accounts = _.map(state.accounts, (val, uid) => {
        return { ...val, uid,  blockChainData: bc[uid]};
    });
    //console.log("accounts", accounts);
   
    console.log("bc", bc);
    return { accounts };
};

export default connect(mapStateToProps, { accountsFetch, accountsBCFetch })(ListAccounts);
