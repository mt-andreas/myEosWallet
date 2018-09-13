import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
       // this.createDataSource(this.props);
    }

    renderRow(employee) {
        return <ListItem employee={employee.item} />;
    }

    render() {
        console.log(this.props);
        return (
           <FlatList 
            data={this.props.employees}
            renderItem={this.renderRow}
            keyExtractor={(key) => key.uid.toString()}
           />
        );
    }
}
const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
