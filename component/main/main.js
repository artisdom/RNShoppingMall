/**
 * Created by jaeng on 2017/7/23.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from '../home/home';
import Mine from '../mine/mine';
import More from '../more/more';
import Shop from '../shop/shop';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    render() {
        return (
            < TabNavigator >
                < TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}
                    title="首页"
                    >
                    <Home/>
                </ TabNavigator.Item >
                < TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'shop'})}
                    title="商家">
                    <Shop/>
                </ TabNavigator.Item >

                < TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    renderIcon={() => <Image style={styles.iconStyle} source={{uri: 'icon_tabbar_mine'}}/> }
                    renderSelectedIcon={() => <Image style={styles.iconStyle}
                                                     source={{uri: 'icon_tabbar_mine_selected'}}/> }
                    onPress={() => this.setState({selectedTab: 'mine'})}
                    title="我的">
                    <Mine/>
                </ TabNavigator.Item >
                < TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    renderIcon={() => <Image style={styles.iconStyle} source={{uri: 'icon_tabbar_misc'}}/> }
                    renderSelectedIcon={() => <Image style={styles.iconStyle}
                                                     source={{uri: 'icon_tabbar_misc_selected'}}/> }
                    onPress={() => this.setState({selectedTab: 'more'})}
                    title="更多">
                    <More/>
                </ TabNavigator.Item >
            </ TabNavigator >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    }
});