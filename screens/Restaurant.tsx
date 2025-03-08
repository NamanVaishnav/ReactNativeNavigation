import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'
import RestaurantCard from '../components/RestaurantCard'

type Props = NativeStackScreenProps<RootStackParams, "RestaurantScreen">

const RestaurantScreen: React.FC<Props> = ({ route, navigation }) => {
    const { name } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>{name}</Text>
            <Text> Related Resturants</Text>
            <RestaurantCard name={'Sushi 1'} onPress={() => {
                navigation.push('RestaurantScreen', { name: 'Sushi 1' })
            }}></RestaurantCard>

            <RestaurantCard name={'Sushi 2'} onPress={() => {
                navigation.push('RestaurantScreen', { name: 'Sushi 2' })
            }}></RestaurantCard>

            <RestaurantCard name={'Sushi 3'} onPress={() => {
                navigation.push('RestaurantScreen', { name: 'Sushi 3' })
            }}></RestaurantCard>
        </View>
    )
}

export default RestaurantScreen

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