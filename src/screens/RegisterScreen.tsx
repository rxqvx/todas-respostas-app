import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterScreen = ({
	navigation,
	onClick,
}: {
	navigation?: any;
	onClick: any;
}) => {
	return (
		<SafeAreaView>
			<Text>Register/Login Screen</Text>
			<Button title="Register Now" onPress={() => onClick()} />
		</SafeAreaView>
	);
};

export default RegisterScreen;
