import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HomeScreenProps } from '../types/navigation.types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.description}>This is the main home screen in the stack navigator.</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details', {
                        itemId: 86,
                        itemName: 'React Navigation Example'
                    })}
                />
            </View>

            <Text style={styles.note}>
                This screen demonstrates how to pass parameters to another screen.
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
        marginBottom: 30,
    },
    buttonContainer: {
        marginVertical: 15,
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

export default HomeScreen; 