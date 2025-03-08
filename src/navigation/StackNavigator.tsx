import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList, ProfileStackParamList } from '../types/navigation.types';

// Screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Create the native stack navigators
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

// Home Stack Navigator
export const HomeStackNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <HomeStack.Screen
                name="Details"
                component={DetailsScreen}
                options={({ route }) => ({
                    title: route.params.itemName,
                    headerBackTitle: 'Back'
                })}
            />
        </HomeStack.Navigator>
    );
};

// Profile Stack Navigator
export const ProfileStackNavigator: React.FC = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ title: 'My Profile' }}
            />
            <ProfileStack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{ title: 'Edit Profile' }}
            />
            <ProfileStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Settings' }}
            />
        </ProfileStack.Navigator>
    );
}; 