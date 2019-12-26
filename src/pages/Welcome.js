import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from 'react-native';

export default class Welcome extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
    async componentDidMount() {
        try {
            const response = await fetch('http://demo0470272.mockable.io/welcome');
            const responseJson = await response.json();
            
            //alert(JSON.stringify(responseJson));
            
            this.setState({
                isLoading: false,
                dataSource: responseJson.data,
            }, function () {
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Selamat Datang</Text>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => <Text style={styles.logoText}>{item.nama}</Text>}
                  />
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}
                            onPress={_ => this.props.navigation.navigate('Learning')} >Pilih Menu</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop: 200,
        marginVertical: 15,
        fontSize: 28,
        color: '#1c313a',
    },
    logoText: {
        marginVertical: 15,
        fontSize: 28,
        color: '#1c313a',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fc7b03',
        textAlign: 'center'
    },
    button: {
        width: 200,
        backgroundColor: '#444444',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10,
    }
});
