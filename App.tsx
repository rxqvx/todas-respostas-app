import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import WelcomeScreen from "./src/components/WelcomeScreen";
import AppExplanationScreen from "./src/components/AppExplanationScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./src/screens/RegisterScreen";
import JoinScreen from "./src/screens/JoinScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import InfoScreen from "./src/screens/InfoScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import GameScreen from "./src/screens/GameScreen/GameScreen";

export type RootStackParamList = {
	HomeScreen: undefined;
	GameScreen: undefined;
};

const App: React.FC = () => {
	const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);
	const [showPrivate, setShowPrivate] = useState<boolean>(false);

	return (
		<NavigationContainer>
			{showPrivate ? (
				<BottomTabNavigatorScreen />
			) : showRegisterForm ? (
				<RegisterScreen onClick={() => setShowPrivate(true)} />
			) : (
				<Swiper
					style={styles.wrapper}
					showsButtons={false}
					loop={false}
				>
					<WelcomeScreen />
					<AppExplanationScreen />
					<JoinScreen onClick={() => setShowRegisterForm(true)} />
				</Swiper>
			)}
		</NavigationContainer>
	);
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabNavigatorScreen: React.FC = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Ad" component={HomeNavigator} />
			<Tab.Screen name="Info" component={InfoScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

const HomeNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="GameScreen"
				component={GameScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	wrapper: {},
	slide: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#9DD6EB",
	},
	text: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
	},
});

export default App;
