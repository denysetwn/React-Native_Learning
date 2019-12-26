import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';
import {BackHandler} from 'react-native';

export default class Welcome extends Component {

    constructor(props){
        super(props);
        this.state ={ 
            isLoading: true,
            tableHead: ['NO', 'Nama File', 'Nama Kelas', 'Jlm Unduh'],
            tableData: []
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://demo0470272.mockable.io/filesaya');
            const responseJson = await response.json();
            let fileSaya = responseJson.data;
            var arrayData = [];
            for (let i = 0; i < fileSaya.length; i++) {
                let arrayItem = [];
                arrayItem.push(fileSaya[i].id);
                arrayItem.push(fileSaya[i].nama);
                arrayItem.push(fileSaya[i].kelas);
                arrayItem.push(fileSaya[i].jumlah);
                arrayItem.push('');
                arrayData.push(arrayItem);   
            }
            this.setState({
                isLoading: false,
                dataSource: responseJson.data,
                tableData: arrayData,

            }, function () {
                BackHandler.addEventListener('hardwareBackPress', () => {
                    this.props.navigation.navigate('Learning');
                    return true;
                });
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => {});
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tableHead: ['No', 'Nama File', 'Nama Kelas', 'Jlm Unduh'],
    //         tableData: [
    //             ['1', 'Integration.pptx', 'Logika Informatika', '10'],
    //             ['2', 'Integration.pptx', 'Logika Informatika', '10'],
    //             ['3', 'Integration.pptx', 'Logika Informatika', '10']
    //         ]
    //     }
    // }

    render() {

        const state = this.state;
        const element = (data, index) => (
            <Text></Text>
        )

        return (
            <View style={styles.container}>
                <ScrollView style={{alignSelf: 'stretch'}}>
                    <View style={styles.container}>

                        <Text style={styles.header}>File Saya</Text>
                    
                        <Table>
                            <Row data={state.tableHead} flexArr={[0.5, 2, 2, 1]} style={styles.head} textStyle={styles.textHead}/>
                            {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row} flexArr={[0.5, 2, 2, 1]}>
                                    {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                                        ))
                                    }
                                </TableWrapper>
                            ))
                        }
                        </Table>
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
        justifyContent: 'center',
        padding: 5
    },
    header: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    head: { 
        height: 50,
        backgroundColor: '#fc7b03'
    },
    textHead: {
        marginVertical: 10,
        fontSize: 14,
        textAlign: 'center'
    },
    text: { 
        margin: 6,
        fontSize: 13,
        textAlign: 'center'
    },
    row: { 
        flexDirection: 'row',
        width: 430, 
        backgroundColor: '#FFF1C1' },
});