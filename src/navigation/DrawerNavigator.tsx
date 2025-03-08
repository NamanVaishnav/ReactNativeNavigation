import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../types/navigation.types';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import TabNavigator from './TabNavigator';

// Create a drawer navigator
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: '#0066cc',
                drawerInactiveTintColor: 'gray',
                drawerLabelStyle: {
                    fontSize: 16,
                },
            }}
        >
            <Drawer.Screen
                name="Main"
                component={TabNavigator}
                options={{
                    title: 'Main App',
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Dashboard"
                component={DashboardScreen}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator; 