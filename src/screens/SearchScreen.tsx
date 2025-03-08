import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchTabProps } from '../types/navigation.types';

const SearchScreen: React.FC<SearchTabProps> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search Screen</Text>
            <Text style={styles.description}>
                This is the search screen accessible from the bottom tab navigator.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        textAlign: 'center',
    },
});

export default SearchScreen; 