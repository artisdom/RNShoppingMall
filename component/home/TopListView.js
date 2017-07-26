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
    ListView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
var {width} = Dimensions.get('window')

export default class TopListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSouce: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
        }
    }

    componentDidMount() {
        this.setState({
            dataSouce: this.state.dataSouce.cloneWithRows(this.props.dataArr)
        })
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSouce}
                renderRow={this._renderRow}
                contentContainerStyle={styles.contentSty}
                scrollEnabled={false}
            />
        );
    }

    _renderRow = (data) => {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=> alert('0')}>
                <View style={styles.rowSty}>
                    <Image source={{uri: data.image}} style={{width: 52, height: 52}}/>
                    <Text style={{fontSize:12}}>
                        {data.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contentSty: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: width
    },
    rowSty: {
        width: width / 5,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
});