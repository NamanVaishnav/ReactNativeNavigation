import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp } from '@react-navigation/drawer';

// Stack Navigator Params
export type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number; itemName: string };
    Profile: { userId: string };
};

// Home Stack Navigator Params
export type HomeStackParamList = {
    HomeScreen: undefined;
    Details: { itemId: number; itemName: string };
};

// Profile Stack Navigator Params
export type ProfileStackParamList = {
    ProfileScreen: undefined;
    EditProfile: undefined;
    Settings: undefined;
};

// Tab Navigator Params
export type MainTabParamList = {
    HomeTab: undefined;
    SearchTab: undefined;
    ProfileTab: undefined;
};

// Drawer Navigator Params
export type DrawerParamList = {
    Main: undefined;
    Dashboard: undefined;
    Settings: undefined;
    About: undefined;
};

// Stack Screen Props
export type HomeScreenProps = {
    navigation: NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;
    route: RouteProp<HomeStackParamList, 'HomeScreen'>;
};

export type DetailsScreenProps = {
    navigation: NativeStackNavigationProp<HomeStackParamList, 'Details'>;
    route: RouteProp<HomeStackParamList, 'Details'>;
};

export type ProfileScreenProps = {
    navigation: NativeStackNavigationProp<ProfileStackParamList, 'ProfileScreen'>;
    route: RouteProp<ProfileStackParamList, 'ProfileScreen'>;
};

// Tab Screen Props
export type HomeTabProps = {
    navigation: BottomTabNavigationProp<MainTabParamList, 'HomeTab'>;
};

export type SearchTabProps = {
    navigation: BottomTabNavigationProp<MainTabParamList, 'SearchTab'>;
};

export type ProfileTabProps = {
    navigation: BottomTabNavigationProp<MainTabParamList, 'ProfileTab'>;
};

// Drawer Screen Props
export type DashboardScreenProps = {
    navigation: DrawerNavigationProp<DrawerParamList, 'Dashboard'>;
};

export type SettingsScreenProps = {
    navigation: DrawerNavigationProp<DrawerParamList, 'Settings'>;
};

export type AboutScreenProps = {
    navigation: DrawerNavigationProp<DrawerParamList, 'About'>;
}; 