import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ProfileScreenProps } from '../types/navigation.types';

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.description}>
                This is the profile screen in its own stack navigator within the tab navigator.
            </Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Settings"
                    onPress={() => navigation.navigate('Settings')}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Edit Profile"
                    onPress={() => navigation.navigate('EditProfile')}
                />
            </View>

            <Text style={styles.note}>
                This screen demonstrates nested navigation within tabs.
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
        marginVertical: 10,
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

export default ProfileScreen; 