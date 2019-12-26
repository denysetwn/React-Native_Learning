import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {BackHandler} from 'react-native';

export default class PlacementTestICT extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('Learning');
            return true;
        });
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => {});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logoText}>Placement Test ICT</Text>
                 <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mulai Ujian</Text>
                </TouchableOpacity>
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
    logoText: {
        marginVertical: 15,
        marginBottom: 30,
        fontSize: 28,
        color: '#1c313a',
        fontWeight: 'bold'
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
        marginBottom: -10,
    }
});