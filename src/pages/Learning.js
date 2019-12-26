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

import DropDownItem from 'react-native-drop-down-item';
import {BackHandler} from 'react-native';

export default class Learning extends Component {

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            // matkulData: []
        }
      }
    
    async componentDidMount() {
        try {
            const response = await fetch('http://demo0470272.mockable.io/welcome');
            const responseJson = await response.json();
            // let mataKuliah = responseJson.data;
            // var arrayData = [];
            // for (let i = 0; i < 1; i++) {
            //     let arrayItem = [];
            //     arrayItem.push(mataKuliah[i].matakuliah01);
            //     arrayItem.push(mataKuliah[i].matakuliah02);
            //     arrayItem.push(mataKuliah[i].matakuliah03);
            //     arrayItem.push('');
            //     arrayData.push(arrayItem);
            // }
            
            //alert(JSON.stringify(arrayData));
            
            this.setState({
                isLoading: false,
                dataSource: responseJson.data,
                // matkulData: arrayData,
            }, function () {
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    // _itemComponent = ({ item })=>{
    //     return(
    //         <View>
    //             <TouchableOpacity>
    //                 <Text style={styles.buttonTextItem}
    //                     onPress={_ => this.props.navigation.navigate('MataKuliah')} >{item.name}</Text>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{alignSelf: 'stretch'}}>
                    <View style={styles.container}>
                        <Image style={styles.image}
                            source={require('../images/logo.png')}/>
                            <FlatList
                            data={this.state.dataSource}
                            renderItem={({item}) => <Text style={styles.logoText}>{item.nama}</Text>}
                            />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}
                                onPress={_ => this.props.navigation.navigate('Beranda')} >Beranda</Text>
                        </TouchableOpacity>
                        
                        <DropDownItem header={
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Mata Kuliah</Text>
                            </View>
                            }>
                            <TouchableOpacity>
                                {/* <FlatList
                                    data={this.state.dataSource}
                                    renderItem={this._itemComponent}
                                    keyExtractor={(item, index) => index.toString()}
                                    refreshing={this.state.isLoading}
                                /> */}
                                {/* <FlatList style={styles.buttonTextItem}
                                    data={this.state.matkulData}
                                    onPress={_=> this.state.navigation.navigate('MataKuliah')} 
                                    renderItem={({item}) => <Text style={styles.logoText}>{item}</Text>}
                                    >
                                </FlatList> */}
                                <Text style={styles.buttonTextItem}
                                    onPress={_ => this.props.navigation.navigate('MataKuliah')} >PBO</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.buttonTextItem}
                                    onPress={_ => this.props.navigation.navigate('MataKuliah')} >Kommas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.buttonTextItem}
                                    onPress={_ => this.props.navigation.navigate('MataKuliah')} >RPL</Text>
                            </TouchableOpacity>
                        </DropDownItem>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}
                                onPress={_ => this.props.navigation.navigate('PlacementTestICT')} >Placement Test ICT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}
                                onPress={_ => this.props.navigation.navigate('FileSaya')} >File Saya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}
                                onPress={_ => this.props.navigation.navigate('Login')} >Logout</Text>
                        </TouchableOpacity>
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
    image: {
        width: 80,
        height: 80
    },
    logoText: {
        marginVertical: 10,
        marginBottom: 10,
        fontSize: 20,
        color: '#1c313a',
        fontWeight: 'bold'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#7e7e7e',
        textAlign: 'left',
    },
    button: {
        width: 330,
        marginVertical:10,
        paddingVertical: 10,
        marginBottom: -10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },

    buttonTextItem: {
        fontSize: 16,
        fontWeight: '500',
        color: '#7e7e7e',
        textAlign: 'left',
        paddingVertical: 10,
    }
});