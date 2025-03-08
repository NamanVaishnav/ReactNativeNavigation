import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../types/navigation.types';

type Props = NativeStackScreenProps<ProfileStackParamList, 'EditProfile'>;

const EditProfileScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <Text style={styles.description}>
                This screen is part of the Profile stack navigator.
            </Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go Back"
                    onPress={() => navigation.goBack()}
                />
            </View>

            <Text style={styles.note}>
                This demonstrates nested stack navigation within a tab.
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

export default EditProfileScreen; 