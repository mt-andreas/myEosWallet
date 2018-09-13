import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ListAccounts from './components/ListAccounts';
import AddAccount from './components/AddAccount';



const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login" 
                        component={LoginForm}
                        title="Please Login Now"
                        initial

                    />
                </Scene>
                <Scene key="main">
                     <Scene key="listAccounts"
                        rightTitle="Add"
                        onRight={() => Actions.addAccount()}
                        component={ListAccounts}
                        title="Accounts"
                    />

                    <Scene key="addAccount"
                        component={AddAccount}
                        title="Add Account"
                    />


                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
