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
    Platform
} from 'react-native';

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this._renderNavBar()}
            </View>
        );
    }

    //导航条
    _renderNavBar = () => {
        return (
            <View style={styles.topNav}>
                <Text style={styles.topText}>更多</Text>
                <TouchableOpacity activeOpacity={0.7} focusedOpacity={0.5} onPress={(()=>{alert('点了')})} style={styles.topRight}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.topImg}/>
                </TouchableOpacity>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
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
    },
    topRight:{
        position:'absolute',
        right:10,
        marginTop: Platform.OS === 'ios' ? 18 : 0,
    }

});