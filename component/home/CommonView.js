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
import Dimensions from 'Dimensions'

var {width} = Dimensions.get('window')
export default class CommonView extends Component {

    static defaultProps = {
        title: '',
        subTitle: '',
        rightImage: '',
        titleColor: ''
    }

    render() {
        return (
            <View style={styles.viewSty}>
                <View>
                    <Text style={{fontSize: 18, color: this.props.titleColor}}>{this.props.title}</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>{this.props.subTitle}</Text>
                </View>
                <Image source={{uri: this.props.rightImage}} style={{width: 64, height: 43}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewSty: {
        width: width * 0.5 -1,
        backgroundColor: 'white',
        height: 59,
        flexDirection:'row',
        marginBottom:1,
        alignItems:'center',
        justifyContent:'space-around'
    }
});
