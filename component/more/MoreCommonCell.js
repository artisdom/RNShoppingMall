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
    Switch
} from 'react-native';

export default class MoreCommonCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
        }
    }

    static defaultProps = {
        title: '',
        isSwitch: false,
        rightTitle: ''
    }

    render() {

        console.log(this.props.isSwitch);

        return (
            <View style={styles.container}>
                <Text style={styles.textSty}>
                    {this.props.title}
                </Text>
                {this._renderRightView()}
            </View>
        );
    }

    _renderRightView = () => {
        if (this.props.isSwitch) {
            return (
                <Switch style={{marginRight: 8}} value={this.state.isOn}
                        onValueChange={this._onSwitchValueChange}/>
            )
        } else {
            return (
                <View style={{flexDirection: 'row'}}>
                    {this._onRightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={styles.imgSty}/>
                </View>
            )
        }
    }

    _onSwitchValueChange = () => {
        this.setState({
            isOn: !this.state.isOn
        })
    }

    _onRightTitle = () => {
        if (this.props.rightTitle.length > 0) {
            return (
                <Text style={{color: 'gray', marginRight: 3}}>{this.props.rightTitle}</Text>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        height: 44,
        backgroundColor: '#ffffff',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgSty: {
        width: 10,
        height: 18,
        marginRight: 8
    },
    textSty: {
        marginLeft: 8
    }
});