import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
    <TextInput style={styles.num} />
);

const styles = StyleSheet.create({
    num: {
        width: 140,
        height: 80,
        fontSize: 20
    }
});