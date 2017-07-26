/**
 * Created by jaeng on 2017/7/23.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';


import Dimensions from 'Dimensions';
import TopView from './TopView'
import MiddleView from './MiddleView'
import MiddleBottomView from './MiddleBottomView'

var {width, height} = Dimensions.get('window');

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this._renderNavBar()}
                <ScrollView
                >
                    <TopView/>
                    <MiddleView/>
                    <MiddleBottomView/>
                </ScrollView>
            </View>
        );
    }

    _renderNavBar = () => {
        return (
            <View style={styles.topNav}>
                <TouchableOpacity focusedOpacity={0.5} activeOpacity={0.7} onPress={() => {
                    alert('点击')
                }}>
                    <Text style={{color: '#ffffff', marginTop: Platform.OS === 'ios' ? 16 : 0,}}>广州</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder={'输入商家  品类  商圈'}
                    style={styles.topInput}
                />
                <View style={styles.topImgView}>
                    <TouchableOpacity focusedOpacity={0.5} activeOpacity={0.7} onPress={() => {
                        alert('点击')
                    } }>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.topImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity focusedOpacity={0.5} activeOpacity={0.7} onPress={() => {
                        alert('点击')
                    }}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.topImg}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    topNav: {
        height: 64,
        backgroundColor: 'rgba(255,95,0, 1.0)',
        //设置主轴方向
        flexDirection: 'row',
        //设置侧轴对其方向
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    topInput: {
        width: width * 0.7,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f7fcff',
        marginTop: Platform.OS === 'ios' ? 16 : 0,
        paddingLeft: 8
    },
    topImgView: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? 16 : 0,
    },
    topImg: {
        width: 30,
        height: 30
    },
});