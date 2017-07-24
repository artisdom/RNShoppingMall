/**
 * Created by jaeng on 2017/7/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Dimensions from 'Dimensions';
import Main from './main'
import {Navigator} from 'react-native-deprecated-custom-components';

export default class Welcome extends Component {


    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={{flex: 1}}/>
        )
    }

    componentDidMount() {
        //定时跳转
        setTimeout(() => {
            this.props.navigator.replace({
                component: Main
            })
        }, 1500);
    }

}

