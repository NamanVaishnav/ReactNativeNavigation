import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Menu from '../components/Menu'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'

type Props = NativeStackScreenProps<RootStackParams, "Restaurants">

const Restaurants = ({ navigation }: Props) => {
    return (

        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Restaurants Screen</Text>
                <ScrollView>
                    <RestaurantCard name='Sushi Restaurants' onPress={(name) => {
                        navigation.navigate('RestaurantScreen', { name });
                    }} />
                    <RestaurantCard name='Burger Restaurants' onPress={(name) => {
                        navigation.navigate('RestaurantScreen', { name });
                    }} />
                    <RestaurantCard name='Fine dining Restaurants' onPress={(name) => {
                        navigation.navigate('RestaurantScreen', { name });
                    }} />

                </ScrollView>
                <Menu />
            </View>

        </SafeAreaView>

    )
}

export default Restaurants

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold'
    }
})