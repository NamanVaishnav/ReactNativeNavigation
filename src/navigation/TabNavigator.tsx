import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import { HomeStackNavigator, ProfileStackNavigator } from './StackNavigator';
import { StyleSheet } from 'react-native';
import { MainTabParamList } from '../types/navigation.types';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator<MainTabParamList>();

// We would typically import icons here, but for simplicity we'll use text labels
const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#0066cc',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: styles.tabBarLabel,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    // In a real app, we would use icons: tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    // tabBarIcon: ({ color }) => <Icon name="search" color={color} size={26} />
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStackNavigator}
                options={{
                    tabBarLabel: 'Profile',
                    // tabBarIcon: ({ color }) => <Icon name="person" color={color} size={26} />
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarLabel: {
        fontSize: 12,
        fontWeight: '500',
    },
});

export default TabNavigator; 