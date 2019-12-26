import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import SelectInput from 'react-native-select-input-ios';
import {BackHandler} from 'react-native';

export default class MataKuliah extends Component {

    constructor(props){
        super(props);
        this.state ={ 
            isLoading: true,
            valueSmall1: 1,
        }
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

    radio_props = [
        {label: 'Forum', value: 0 },
        {label: 'Materi', value: 1 },
        {label: 'Pengumuman', value: 0}
    ];

    onSubmitEditingSmall1(value) {
        this.setState({
          valueSmall1: value
        })
    }

    getPickerOptions() {
        return [
          { value: 0, label: 'Ruang : Kelas' },
          { value: 1, label: 'Ruang : MatKul' },
          { value: 2, label: 'Ruang : ProDi' },
          { value: 3, label: 'Ruang : Jurusan' },
          { value: 4, label: 'Ruang : Fakultas' },
          { value: 5, label: 'Ruang : Universitas'}
        ]
      }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView style={{alignSelf: 'stretch'}}>
                    <View style={styles.container}>

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
                                    <TextInput style={styles.actionBody1}
                                        placeholder="Tulis Status..."
                                        placeholderTextColor="#808080"
                                        selectionColor="#1c313a"
                                        keyboardType="email-address"
                                    />
                                    <View style={styles.actionBody}>
                                        <RadioForm style={styles.radioForm}
                                            radio_props={this.radio_props}
                                            initial={0}
                                            formHorizontal={true}
                                            buttonSize={8}
                                            labelHorizontal={true}
                                            buttonColor={'#cccccc'}
                                            animation={true}
                                            onPress={(value) => {this.setState({value:value})}}
                                        />
                                    </View>
                                    <View style={styles.actionBody}>
                                        <View style={styles.footerCard}>
                                    
                                            <SelectInput style={styles.selectInput}
                                                buttonSize={20}
                                                mode={'dropdown'}
                                                options={this.getPickerOptions()}
                                                onCancelEditing={() => console.log('onCancel')}
                                                onSubmitEditing={this.onSubmitEditingSmall1.bind(this)}
                                            />

                                        </View>

                                        <View style={styles.buttonStack}>
                                            <TouchableOpacity style={styles.button}>
                                                <Text style={styles.buttonText1}
                                                    >Import File</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button}>
                                                <Text style={styles.buttonText1}
                                                    >Update</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <Image
                                    source={require("../images/logo.png")}
                                    style={styles.image}
                                />
                            </View>
                        </View>

                        <View style={styles.cardView2}>
                            <Text style={styles.logoText, styles.daftar}>Daftar Peserta Kelas</Text>
                            <View style={styles.row}>
                                <View style={styles.absen}>
                                    <Text>Deny Setiawan</Text>
                                    <Text>Muhammad Iqbal</Text>
                                    <Text>M. Hanif Khoirul Amri</Text>
                                    <Text>Qomariyah</Text> 
                                </View>
                                <View style={styles.absen}>
                                    <Text>171060500101</Text>
                                    <Text>171060500102</Text>
                                    <Text>171060500103</Text>
                                    <Text>171060500104</Text> 
                                </View>
                            </View>
                            <TouchableOpacity style={styles.absen}>
                                <Text style={{color: '#aaaaaa', paddingVertical: 6}}
                                    >Lihat Semua Peserta Kelas</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardViewBeranda}>
                            <View style={styles.bodyContentStackStackBeranda}>
                                <View style={styles.bodyContentStackBeranda}>
                                    <View style={styles.bodyContentBeranda}>
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
                                    <View style={styles.actionBodyBeranda}>
                                        <Text style={styles.actionBodyTextBeranda}>Greyhound divisively hello coldly wonderfully marginally far upon excluding</Text>
                                    </View>
                                </View>
                                <Image
                                    source={require("../images/logo.png")}
                                    style={styles.imageBeranda}
                                />
                            </View>
                        </View>

                        <View style={styles.cardViewBeranda}>
                            <View style={styles.bodyContentStackStackBeranda}>
                                <View style={styles.bodyContentStackBeranda}>
                                    <View style={styles.bodyContentBeranda}>
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
                                    <View style={styles.actionBodyBeranda}>
                                        <Text style={styles.actionBodyTextBeranda}>Greyhound divisively hello coldly wonderfully marginally far upon excluding</Text>
                                    </View>
                                </View>
                                <Image
                                    source={require("../images/logo.png")}
                                    style={styles.imageBeranda}
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
        marginVertical: 5
    },
    cardView: {
        width: 340,
        height: 210,
        marginVertical: 5,
        borderRadius: 15,
        borderWidth: 1
    },
    cardView2: {
        width: 340,
        height: 150,
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 5
    },
    row: {
        flexDirection: 'row'
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
    button: {
        width: 70,
        height: 25,
        backgroundColor: '#444444',
        borderRadius: 15,
        marginVertical: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        marginHorizontal: 5
    },
    buttonStack: {
        flex: 1,
        width: 250,
        height: 40,
        justifyContent: 'flex-end',
        flexDirection: "row",
    },
    buttonText: {
        fontSize: 9,
        color: '#7e7e7e',
        opacity: 0.5,
        lineHeight: 16
    },
    buttonText1: {
        paddingLeft: 11,
        fontSize: 10,
        color: '#fc7b03',
        opacity: 0.5,
        lineHeight: 16,
        
    },
    bodyContent: {
        left: 90,
        width: 270,
        height: 70,
        flex: 1,
        position: "absolute",
    },
    actionBody1: {
        top: 70,
        width: 300,
        height: 40,
        paddingBottom: 6,
        justifyContent: 'center',
        flexDirection: "row",
        fontSize: 12,
        marginHorizontal: 20,
        borderBottomWidth: 0.5,
    },
    actionBody: {
        marginHorizontal: 20,
        top: 70,
        width: 300,
        height: 40,
        justifyContent: 'center',
        flexDirection: "row",
    },
    radioForm:{
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 340,
        height: 70,
        position: "absolute",
    },
    bodyContentStackStack: {
        width: 340,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerCard: {
        width: 100,
        height: 40,
        padding: 2,
    },
    selectInput: {
        width: 130,
        marginTop: -13,
        justifyContent: 'center',
    },
    daftar: {
        fontSize: 16,
        margin: 8,
        borderBottomWidth: 1,
        width: 150
    },
    absen: {
        fontSize: 15,
        paddingHorizontal: 8,
    },

    cardViewBeranda: {
        width: 360,
        height: 130,
        marginVertical: 5,
        backgroundColor: '#eeeeee',
        borderRadius: 15
    },
    imageBeranda: {
        left: 20,
        width: 60,
        height: 60,
        position: "absolute",
    },
    logoTextBeranda: {
        fontSize: 15,
        color: '#1c313a',
        fontWeight: 'bold',
        paddingVertical: 6
    },
    buttonTextBeranda: {
        fontSize: 10,
        fontWeight: '500',
        color: '#7e7e7e',
        opacity: 0.5,
        lineHeight: 16
    },
    bodyContentBeranda: {
        left: 90,
        width: 270,
        height: 70,
        flex: 1,
        position: "absolute",
    },
    actionBodyBeranda: {
        top: 70,
        width: 360,
        height: 40,
        justifyContent: 'center',
        flexDirection: "row",
    },
    actionBodyTextBeranda: {
        fontSize: 12,
        fontWeight: '500',
        color: '#1c313a',
        opacity: 0.5,
        lineHeight: 16,
        marginHorizontal: 20
    },
    bodyContentStackBeranda: {
        width: 360,
        height: 70,
        position: "absolute",
    },
    bodyContentStackStackBeranda: {
        width: 360,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});