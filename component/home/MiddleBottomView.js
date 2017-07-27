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

var dataStr = require('../../localdata/home_04.json')

export default class MiddleBottomView extends Component {

    render() {
        return (
            <View style={{marginTop: 15}}>
                <View style={styles.topView}>

                </View>
                <View style={styles.bottomView}>
                    {this._renderBottomItem()}
                </View>
            </View>
        );
    }

    _renderBottomItem = () => {
        var itemArr = [];
        var dataArr = dataStr.data;
        for (var i = 0; i < dataArr.length; i++) {
            var arr = dataArr[i];
            itemArr.push(
                <CommonView key={i}
                            title={arr.title}
                            subTitle={arr.deputytitle}
                            rightImage={arr.imageurl}
                            titleColor={arr.color}
                />
            )
        }
        return itemArr;
    }

}

const styles = StyleSheet.create({
    topView: {},
    bottomView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
