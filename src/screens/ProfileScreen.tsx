import React from "react";
import { View, Text, Button } from "react-native";

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
	return (
		<View>
			<Text>Profile Screen</Text>
			<Button
				title="Edit Profile"
				onPress={() => navigation.navigate("EditProfile")}
			/>
			<Button
				title="Delete Account"
				onPress={() => console.log("/* Add logic to delete account */")}
			/>
		</View>
	);
};

export default ProfileScreen;
