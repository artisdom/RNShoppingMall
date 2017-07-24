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
import {Navigator} from 'react-native-deprecated-custom-components';

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
                {this._renderTabBarItem('home', '首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', Home)}
                {this._renderTabBarItem('shop', '商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', Shop)}
                {this._renderTabBarItem('mine', '我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', Mine)}
                {this._renderTabBarItem('more', '更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', More)}
            </ TabNavigator >
        );
    }

    _renderTabBarItem = (sel, title, icon, icon_sel, comp) => {

        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === sel}
                renderIcon={() => <Image source={{uri: icon}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri: icon_sel}}
                                                 style={styles.iconStyle}/>}
                onPress={() => this.setState({selectedTab: sel})}
                selectedTitleStyle={styles.selTextStyle}
                title={title}
            >
                <Navigator
                    initialRoute={{name: {title}, component: comp}}

                    configureScene={
                        (route) => {
                            return ({
                                ...Navigator.SceneConfigs.PushFromRight,
                                gestures: null
                            });
                        }
                    }

                    renderScene={
                        (route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator}/>
                        }
                    }
                />
            </TabNavigator.Item >
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
    },
    selTextStyle: {
        color: 'red'
    }
});