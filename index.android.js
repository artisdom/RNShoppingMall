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

export default class RnStore extends Component {
    render() {
        return (
            <Main/>
        );
    }
}

AppRegistry.registerComponent('RnShop', () => RnStore);
