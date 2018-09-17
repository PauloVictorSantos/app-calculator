import React from 'react';
import { View, StyleSheet } from 'react-native';
import Numero from './Numero';

export default props => (
    <View  >
        <Numero style={styles.numeros} num={props.num1}/>
        <Numero  style={styles.numeros} num={props.num2}/>
    </View>
);

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});