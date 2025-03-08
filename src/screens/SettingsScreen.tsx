import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SettingsScreenProps } from '../types/navigation.types';

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
            <Text style={styles.description}>
                This screen is accessible from both the drawer and the profile stack.
            </Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Open Drawer"
                    onPress={() => navigation.openDrawer()}
                />
            </View>

            <Text style={styles.note}>
                This demonstrates how the same screen can be part of multiple navigators.
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

export default SettingsScreen; 