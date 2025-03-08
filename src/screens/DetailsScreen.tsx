import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DetailsScreenProps } from '../types/navigation.types';

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route, navigation }) => {
    // Get the params
    const { itemId, itemName } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>

            <View style={styles.detailsContainer}>
                <Text style={styles.label}>Received params:</Text>
                <Text style={styles.value}>itemId: {itemId}</Text>
                <Text style={styles.value}>itemName: {itemName}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go back to Home"
                    onPress={() => navigation.goBack()}
                />
            </View>

            <Text style={styles.note}>
                This screen demonstrates how to receive and display navigation parameters.
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
        marginBottom: 30,
    },
    detailsContainer: {
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        width: '90%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    value: {
        fontSize: 16,
        marginBottom: 5,
    },
    buttonContainer: {
        width: '80%',
    },
    note: {
        fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
        color: '#666',
    }
});

export default DetailsScreen; 