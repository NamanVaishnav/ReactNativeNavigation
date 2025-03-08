import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DashboardScreenProps } from '../types/navigation.types';

const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard Screen</Text>
            <Text style={styles.description}>
                This screen is part of the drawer navigation.
            </Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Open Drawer"
                    onPress={() => navigation.openDrawer()}
                />
            </View>

            <Text style={styles.note}>
                From here you can open the drawer to navigate to other drawer screens.
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

export default DashboardScreen; 