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
} from 'react-native';


export default class BottomCenterCell extends Component {

    static defaultProps = {
        leftIcon: '',
        leftTitle: '',
        rightTitle: ''
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.leftView}>
                    <Image source={{uri: this.props.leftIcon}}
                           style={{width: 23, height: 23}}
                    />
                    <Text>{this.props.leftTitle}</Text>
                </View>
                <View style={styles.rightView}>
                    <Text>{this.props.rightTitle}</Text>
                    <Image source={{uri: 'icon_cell_rightArrow'}}
                           style={{width: 8, height: 13, marginRight: 8, marginLeft: 8}}
                    />
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    view: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1

    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});
