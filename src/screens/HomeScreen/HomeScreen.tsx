import React, { useState } from "react";
import { View, Text, Button, Modal } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import { Centered, ModalView } from "./HomeScreen.styles";
import ButtonAd from "../../components/ButtonAd";
import { RootStackParamList } from "../../../App";

type Props = StackScreenProps<RootStackParamList, "HomeScreen">;

type HomeScreenNavigationProp = Props["navigation"];

const HomeScreen: React.FC<Props> = ({
	navigation,
}: {
	navigation: HomeScreenNavigationProp;
}) => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<View style={{ flex: 1 }}>
			<Text>Ad Screen</Text>
			<Button
				title="Start game"
				onPress={() => navigation.navigate("GameScreen")}
			/>
			<Modal
				visible={isModalVisible}
				animationType="slide"
				presentationStyle="overFullScreen"
				statusBarTranslucent={true}
				hardwareAccelerated={true}
			>
				<Centered>
					<ModalView>
						<Text>Ad Confirmation Modal</Text>
						<Button title="Cancel" onPress={toggleModal} />
					</ModalView>
				</Centered>
			</Modal>
		</View>
	);
};

export default HomeScreen;
