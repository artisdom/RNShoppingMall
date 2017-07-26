/**
 * Created by jaeng on 2017/7/26.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import CommonView from './CommonView'
import Dimensions from 'Dimensions'
var dataArr = require('../../localdata/home_middle_01.json')
var {width} = Dimensions.get('window')

export default class MiddleView extends Component {
    render() {
        return (
            <View style={{marginTop: 10, backgroundColor: 'white', flexDirection: 'row',}}>
                {this._renderLeftView()}
                <View style={{}}>
                    {this._renderRightView()}
                </View>
            </View>
        );
    }

    _renderLeftView = () => {
        var leftDate = dataArr.dataLeft[0];
        return (
            <View style={{
                width: width * 0.5,
                height: 119,
                marginBottom: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={{uri: leftDate.img1}} style={{width: 94, height: 30}}/>
                <Image source={{uri: leftDate.img2}} style={{width: 94, height: 30}}/>
                <Text style={{marginTop: 2}}>{leftDate.title}</Text>
                <View style={{flexDirection: 'row', marginTop: 7}}>
                    <Text style={{padding: 2, color: 'green'}}>{leftDate.price}</Text>
                    <Text style={{backgroundColor: 'yellow', padding: 2, color: 'orange'}}>{leftDate.sale}</Text>
                </View>
            </View>
        );
    }

    _renderRightView = () => {
        var itemArr = [];
        var dataRight = dataArr.dataRight;
        for (var i = 0; i < dataRight.length; i++) {
            var right = dataRight[i];
            itemArr.push(
                <CommonView key={i}
                            title={right.title}
                            subTitle={right.subTitle}
                            rightImage={right.rightImage}
                            titleColor={right.titleColor}
                />
            )
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({});
