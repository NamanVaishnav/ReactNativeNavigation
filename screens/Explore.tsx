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
                    <RestaurantCard name='Sushi Restaurants' />
                    <RestaurantCard name='Burger Restaurants' />
                    <RestaurantCard name='Fine dining Restaurants' />
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Most Poplar Restaurants</Text>
                    <RestaurantCard name='Sushi Restaurants' />
                    <RestaurantCard name='Burger Restaurants' />

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