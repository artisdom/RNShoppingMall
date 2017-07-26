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
    ScrollView
} from 'react-native';
import Dimensions from 'Dimensions'
import TopListView from './TopListView'

var {width} = Dimensions.get('window')
var topDataList = require('../../localdata/topMenu.json')

export default class TopView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indicator: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                >
                    {this._renderScrollItem()}
                </ScrollView>
                <View style={styles.indicatorSty}>
                    {this._renderIndicator()}
                </View>
            </View>
        );
    }

    _renderScrollItem = () => {
        var itemArr = [];
        var colorArr = ['red', 'green'];
        var data = topDataList.data;

        for (var i = 0; i < data.length; i++) {
            itemArr.push(
                <TopListView key={i} dataArr={data[i]}>
                </TopListView>
            )
        }

        return itemArr;
    }

    _renderIndicator = () => {
        var indicatorArr = [];
        for (var i = 0; i < 2; i++) {
            style = ((i === this.state.indicator) ? {color: 'orange'} : {color: 'gray'});
            indicatorArr.push(
                <Text key={i} style={style}>&bull;</Text>
            )
        }
        return indicatorArr;
    }

    _onMomentumScrollEnd = (e) => {
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            indicator: currentPage
        });
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    },
    indicatorSty: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
