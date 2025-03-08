import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import Menu from '../components/Menu'

const ExploreScreen = () => {
    return (


        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.screenTitle}> Restaurants</Text>
                <View>
                    <Text style={styles.sectionTitle}>Restaurants Near You</Text>
                    <RestaurantCard name='Sushi Restaurants' onPress={() => { }} />
                    <RestaurantCard name='Burger Restaurants' onPress={() => { }} />
                    <RestaurantCard name='Fine dining Restaurants' onPress={() => { }} />
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Most Poplar Restaurants</Text>
                    <RestaurantCard name='Sushi Restaurants' onPress={() => { }} />
                    <RestaurantCard name='Burger Restaurants' onPress={() => { }} />
                </View>
                <Menu />
            </View>
        </SafeAreaView>


    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    restaurantCard: {
        backgroundColor: '#efefef'
    },
    sectionTitle: {
        fontSize: 16,
        marginTop: 16
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold'
    }
})