/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Main from './component/main/main';
import {Navigator} from 'react-native-deprecated-custom-components';
import Welcome from './component/main/welcome'

export default class RnStore extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: '欢迎', component: Welcome}}

                configureScene={
                    (route) => {
                        return ({
                            ...Navigator.SceneConfigs.PushFromRight,
                            gestures: null
                        });
                    }
                }

                renderScene={
                    (route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }
            />
        );
    }
}

AppRegistry.registerComponent('RnShop', () => RnStore);
