/**
 * Created by jaeng on 2017/7/23.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import MineCommonCell from "./MineCommonCell";
import MineMiddleView from './MineMiddleView'
import MineHeadView from './MineHeadView'

export default class Mine extends Component {

    render() {
        return (
            <ScrollView
                style={styles.scrollviewSty}
                contentInset={{top: -200}}
                contentOffset={{y: 200}}
            >
                <MineHeadView/>

                <View style={{marginTop: 10}}>
                    <MineCommonCell leftTitle='我的订单'
                                    rightTitle='查看全部订单'
                                    leftIconName='collect'
                    />
                    <MineMiddleView/>
                </View>
                <View style={{marginTop: 10}}>
                    <MineCommonCell leftTitle='钱包'
                                    rightTitle='账户余额 ¥99'
                                    leftIconName='draft'
                    />
                    <MineCommonCell leftTitle='抵用券'
                                    rightTitle='10张'
                                    leftIconName='like'
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <MineCommonCell leftTitle='积分商城'
                                    leftIconName='card'
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <MineCommonCell leftTitle='今日推荐'
                                    leftIconName='new_friend'
                                    rightIconName='me_new'
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <MineCommonCell leftTitle='我要合作'
                                    rightTitle='轻松开店，快来快来'
                                    leftIconName='pay'
                    />
                </View>
            </ScrollView>
        );
    }


}

const styles = StyleSheet.create({
    scrollviewSty: {
        backgroundColor: '#e8e8e8'
    },
});