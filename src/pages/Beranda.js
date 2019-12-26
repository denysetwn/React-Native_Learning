import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList
} from 'react-native';

import {BackHandler} from 'react-native';

export default class Beranda extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
    componentDidMount() {
        return fetch('http://demo0470272.mockable.io/welcome')
        .then((response) => response.json())
        .then((responseJson) => {

            // alert(JSON.stringify(responseJson))
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){
            BackHandler.addEventListener('hardwareBackPress', () => {
                this.props.navigation.navigate('Learning');
                return true;
            });
        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         this.props.navigation.navigate('Learning');
    //         return true;
    //     });
    // }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => {});
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{alignSelf: 'stretch'}}>
                    <View style={styles.container}>
                        <Text style={styles.text}>Aktivitas Semester Gasal</Text>
                        <Text style={styles.text}>Tahun Akademik 2019/2020</Text>
                        
                        <View style={styles.space}>
                        </View>
                    
                        <View style={styles.cardView}>
                            <View style={styles.bodyContentStackStack}>
                                <View style={styles.bodyContentStack}>
                                    <View style={styles.bodyContent}>
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.nama}</Text>}
                                        />
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.jurusan}</Text>}
                                        />
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.matakuliah01}</Text>}
                                        />    
                                    </View>
                                    <View style={styles.actionBody}>
                                        <Text style={styles.actionBodyText}>Greyhound divisively hello coldly wonderfully marginally far upon excluding</Text>
                                    </View>
                                </View>
                                <Image
                                    source={require("../images/logo.png")}
                                    style={styles.image}
                                />
                            </View>
                        </View>

                        {/* <View style={styles.cardView}>
                            <View style={styles.bodyContentStackStack}>
                                <View style={styles.bodyContentStack}>
                                    <View style={styles.bodyContent}>
                                        <Text style={styles.logoText}>Admin</Text>
                                        <Text style={styles.buttonText}>S1 - Teknik Informatika</Text>
                                        <Text style={styles.buttonText}>Rekayasa Perangkat Lunak</Text>
                                    </View>
                                    <View style={styles.actionBody}>
                                        <Text style={styles.actionBodyText}>Greyhound divisively hello coldly wonderfully marginally far upon excluding</Text>
                                    </View>
                                </View>
                                <Image
                                    source={require("../images/logo.png")}
                                    style={styles.image}
                                />
                            </View>
                        </View> */}
                        <View style={styles.cardView}>
                            <View style={styles.bodyContentStackStack}>
                                <View style={styles.bodyContentStack}>
                                    <View style={styles.bodyContent}>
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.nama}</Text>}
                                        />
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.jurusan}</Text>}
                                        />
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.matakuliah02}</Text>}
                                        />    
                                    </View>
                                    <View style={styles.actionBody}>
                                        <Text style={styles.actionBodyText}>Greyhound divisively hello coldly wonderfully marginally far upon excluding</Text>
                                    </View>
                                </View>
                                <Image
                                    source={require("../images/logo.png")}
                                    style={styles.image}
                                />
                            </View>
                        </View>

                        <View style={styles.cardView}>
                            <View style={styles.bodyContentStackStack}>
                                <View style={styles.bodyContentStack}>
                                    <View style={styles.bodyContent}>
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.nama}</Text>}
                                        />
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.jurusan}</Text>}
                                        />
                                        <FlatList
                                            data={this.state.dataSource}
                                            renderItem={({item}) => <Text style={styles.logoText}>{item.matakuliah03}</Text>}
                                        />    
                                    </View>
                                    <View style={styles.actionBody}>
                                        <Text style={styles.actionBodyText}>Greyhound divisively hello coldly wonderfully marginally far upon excluding</Text>
                                    </View>
                                </View>
                                <Image
                                    source={require("../images/logo.png")}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                        
                    </View>  
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    space: {
        paddingVertical: 20
    },
    cardView: {
        width: 360,
        height: 130,
        marginVertical: 5,
        backgroundColor: '#eeeeee',
        borderRadius: 15
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1c313a',
    },
    image: {
        left: 20,
        width: 60,
        height: 60,
        position: "absolute",
    },
    logoText: {
        fontSize: 15,
        color: '#1c313a',
        fontWeight: 'bold',
        paddingVertical: 6
    },
    buttonText: {
        fontSize: 10,
        fontWeight: '500',
        color: '#7e7e7e',
        opacity: 0.5,
        lineHeight: 16
    },
    bodyContent: {
        left: 90,
        width: 270,
        height: 70,
        flex: 1,
        position: "absolute",
    },
    actionBody: {
        top: 70,
        width: 360,
        height: 40,
        justifyContent: 'center',
        flexDirection: "row",
    },
    actionBodyText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#1c313a',
        opacity: 0.5,
        lineHeight: 16,
        marginHorizontal: 20
    },
    bodyContentStack: {
        width: 360,
        height: 70,
        position: "absolute",
    },
    bodyContentStackStack: {
        width: 360,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }

});