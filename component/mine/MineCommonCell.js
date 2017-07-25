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

export default class MineCommonCell extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        leftTitle: '',
        rightTitle: '',
        leftIconName: '',
        rightIconName: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftView}>
                    <Image source={{uri: this.props.leftIconName}} style={styles.leftImg}/>
                    <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                </View>
                <View style={styles.rightView}>
                    {this._renderRight()}
                </View>
            </View>
        );
    }

    _renderRight = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this._renderRightContent()}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={styles.imgSty}/>
            </View>
        )
    }

    _renderRightContent = () => {
        if (this.props.rightIconName.length == 0) {
            return (
                <Text style={styles.rightTitle}>{this.props.rightTitle}</Text>
            )
        } else {
            return (
                <Image source={{uri: this.props.rightImg}} style={styles.rightImg}/>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height:40,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftView: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8
    },
    leftImg: {
        width: 24,
        height: 24,
        marginRight:6,
        borderRadius:12
    },
    rightView: {
    },
    rightImg: {
        width: 24,
        height: 13
    },
    leftTitle: {
        fontSize:16
    },
    rightTitle: {
        marginRight:8,
        color:'gray'
    },
    imgSty: {
        width: 10,
        height: 18,
        marginRight: 8
    },
});