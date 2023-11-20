import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const JoinScreen = ({ onClick }: any) => {
	return (
		<View style={styles.slide}>
			<Text style={styles.text}>Quer fazer parte?</Text>
			<Button title="Registrar" onPress={() => onClick()} />
			<Text>Já tem uma conta?</Text>
			<TouchableOpacity>
				<Text style={styles.loginText}>Logar</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {},
	loginText: {
		color: "blue",
		textDecorationLine: "underline",
	},
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

export default JoinScreen;
