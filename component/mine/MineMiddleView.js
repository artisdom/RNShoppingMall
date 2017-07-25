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
} from 'react-native';

/**--导入外部json数据--**/

var middleData = require('./MiddleData.json');


export default class MineMiddleView extends Component {


    render() {
        return (
            <View style={styles.container}>
                {this._renderAllItem()}
            </View>
        );
    }

    _renderAllItem = () => {

        var itemArr = [];
        for (var i = 0; i < middleData.length; i++) {
            var data = middleData[i];
            itemArr.push(
                <InnerItem key={i} img={data.iconName} text={data.title}/>
            );
        }
        return itemArr;
    }

};

class InnerItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.innerView}>
                <Image style={styles.innerImg} source={{uri: this.props.img}}/>
                <Text style={styles.innerText}>{this.props.text}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingBottom:8,
        paddingTop:8
    },
    innerView: {
        alignItems: 'center',
    },
    innerImg: {
        width: 30,
        height: 20,
    },
    innerText: {}
});