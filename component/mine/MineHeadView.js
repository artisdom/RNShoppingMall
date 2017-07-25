/**
 * Created by jaeng on 2017/7/25.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Platform
} from 'react-native';

var {width} = Dimensions.get('window');

export default class MineHeadView extends Component {


    render() {
        return (
            <View style={styles.container}>
                {this._renderBottomView()}
                {this._renderTopView()}
            </View>
        );
    }


    _renderBottomView = () => {
        return (
            <View style={styles.bottomView}>
                {this._renderBottomItem()}
            </View>
        )
    }

    _renderBottomItem = () => {
        var itemArr = [];
        var data = [
            {
                'number': '100',
                'title': '优惠券'
            }, {
                'number': '12',
                'title': '评价'
            }, {
                'number': '50',
                'title': '收藏'
            }
        ];

        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            itemArr.push(
                <View key={i} style={styles.bottomInnerView}>
                    <Text style={{color: 'white',}}>{d.number}</Text>
                    <Text style={{color: 'white',}}>{d.title}</Text>
                </View>
            );
        }
        return itemArr;
    }

    _renderTopView = () => {
        return (
            <View style={styles.topView}>
                <Image source={{uri: 'see'}} style={styles.leftImg}/>
                <View style={styles.centerView}>
                    <Text style={styles.text}>我还想买~</Text>
                    <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}}/>
                </View>
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}}/>
            </View>
        )
    }

}


const styles = StyleSheet.create({

    container: {
        height: Platform.OS === 'ios' ? 380 : 180,
        backgroundColor: 'rgba(255,96,0,1.0)',
    },

    topView: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? 260 : 60,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    leftImg: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    centerView: {
        flexDirection: 'row',
        width: width * 0.72
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0

    },
    bottomInnerView: {
        width: width / 3 + 1,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.4)',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1
    },

});