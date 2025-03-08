import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Menu from '../components/Menu'

const Restaurants = () => {
    return (

        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Restaurants Screen</Text>
                <ScrollView>

                    <RestaurantCard name='Sushi Restaurants' />
                    <RestaurantCard name='Burger Restaurants' />
                    <RestaurantCard name='Fine dining Restaurants' />

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