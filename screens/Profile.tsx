import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (

        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Profile Srcreen</Text>

                <Text>Name: Naman V</Text>
                <TouchableOpacity>
                    <Text>
                        Edit Profile
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    )
}

export default Profile

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