/**
 * Created by jaeng on 2017/7/27.
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

import BottomCenterCell from './BottomCenterCell'

export default class ShopCenter extends Component {


    render() {
        return (
            <View style={{marginTop: 15}}>
                <BottomCenterCell
                    leftIcon='gw'
                    leftTitle='购物中心'
                    rightTitle='全部四家'
                />
                <ScrollView>

                </ScrollView>
            </View>
        );
    }


}

class ShopItem extends Component {

    static defaultProps = {
        sale: '',
        name: '',
        img: ''
    }

    render() {
        return (
            <View>
                <Image/>
                <Text>{}</Text>
                <Text>{}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({});
