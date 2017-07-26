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
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

import MoreCommonCell from './MoreCommonCell'

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this._renderNavBar()}
                <ScrollView>
                    <View style={{marginTop: 10}}>
                        <MoreCommonCell title='扫一扫'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonCell title='省流量模式' isSwitch={true}/>
                        <MoreCommonCell title='消息提醒'/>
                        <MoreCommonCell title='邀请好友使用'/>
                        <MoreCommonCell title='清空缓存' rightTitle='1.2M'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonCell title='问卷调查'/>
                        <MoreCommonCell title='支付帮助'/>
                        <MoreCommonCell title='网络诊断'/>
                        <MoreCommonCell title='问卷调查'/>
                        <MoreCommonCell title='我要应聘'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonCell title='精品应用'/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    //导航条
    _renderNavBar = () => {
        return (
            <View style={styles.topNav}>
                <Text style={styles.topText}>更多</Text>
                <TouchableOpacity activeOpacity={0.7} focusedOpacity={0.5} onPress={(() => {
                    alert('点了')
                })} style={styles.topRight}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.topImg}/>
                </TouchableOpacity>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    topNav: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1.0)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topText: {
        color: '#ffffff',
        fontSize: 16,
        marginTop: Platform.OS === 'ios' ? 18 : 0,
    },
    topImg: {
        width: 25,
        height: 25,
        marginTop: Platform.OS === 'ios' ? 18 : 0,
    },
    topRight: {
        position: 'absolute',
        right: 10,
    }

});