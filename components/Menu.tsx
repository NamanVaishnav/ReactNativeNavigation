import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';


const Menu = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    return (
        <View style={styles.container} >
            <Text style={styles.sectionTitle}> Navigation</Text>
            <TouchableOpacity onPress={() => {
                // go to explore
                navigation.push('Explore');
            }}>
                <Text style={styles.link}>
                    Explore
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // go to restaurants
                navigation.navigate('Restaurants');
            }}>
                <Text style={styles.link}>
                    Restaurants
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // go to profile
                navigation.navigate('Profile');
            }}>
                <Text style={styles.link}>
                    Profile
                </Text>
            </TouchableOpacity>
        </View >
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        padding: 16,
        margin: 4,
        borderRadius: 12
    },
    sectionTitle: {
        fontSize: 20,

    },
    link: {
        fontSize: 16,
        marginTop: 4,
        color: '#097ade',
        fontWeight: 'bold'
    }
})