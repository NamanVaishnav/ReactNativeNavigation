import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { AboutScreenProps } from '../types/navigation.types';

const AboutScreen: React.FC<AboutScreenProps> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>About This App</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.sectionTitle}>Navigation Types Demonstrated:</Text>
                <Text style={styles.bullet}>• Stack Navigation</Text>
                <Text style={styles.bullet}>• Bottom Tab Navigation</Text>
                <Text style={styles.bullet}>• Drawer Navigation</Text>
                <Text style={styles.bullet}>• Nested Navigation</Text>
                <Text style={styles.bullet}>• Parameter Passing</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Open Drawer"
                    onPress={() => navigation.openDrawer()}
                />
            </View>

            <Text style={styles.version}>Version 1.0.0</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    infoContainer: {
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        width: '90%',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    bullet: {
        fontSize: 16,
        marginBottom: 10,
        paddingLeft: 10,
    },
    buttonContainer: {
        marginVertical: 15,
        width: '80%',
    },
    version: {
        marginTop: 40,
        fontSize: 14,
        color: '#888',
    }
});

export default AboutScreen; 