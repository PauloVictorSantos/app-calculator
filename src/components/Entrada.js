import React from 'react';
import { View, StyleSheet } from 'react-native';
import Numero from './Numero';

export default props => (
    <View  >
        <Numero style={styles.numeros} num={props.num1} 
        atualizaValor={props.atualizaValor} nome='num1'/>
        <Numero  style={styles.numeros} num={props.num2} nome='num2'
         atualizaValor={props.atualizaValor}
        />
    </View>
);

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});