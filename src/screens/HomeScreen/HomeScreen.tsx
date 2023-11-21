import React, { useState } from "react";
import { View, Text, Button, Modal } from "react-native";
import { Centered, ModalView } from "./HomeScreen.styles";

const HomeScreen: React.FC = () => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<View style={{ flex: 1 }}>
			<Text>Ad Screen</Text>
			<Button title="View Ad" onPress={toggleModal} />
			<Modal
				visible={isModalVisible}
				animationType="slide"
				presentationStyle="overFullScreen"
				statusBarTranslucent={true}
				hardwareAccelerated={true}
			>
				{/* <Centered> */}
				<ModalView>
					<Text>Ad Confirmation Modal</Text>
					<Button
						title="Confirm"
						onPress={() => console.log("logic to show admob")}
					/>
					<Button title="Cancel" onPress={toggleModal} />
				</ModalView>
				{/* </Centered> */}
			</Modal>
		</View>
	);
};

export default HomeScreen;
