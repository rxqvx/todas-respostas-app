import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-native";
import {
	RewardedAd,
	RewardedAdEventType,
	TestIds,
} from "react-native-google-mobile-ads";
import { ModalView } from "../screens/HomeScreen/HomeScreen.styles";
import { Text } from "react-native";

const adUnitId = __DEV__
	? TestIds.REWARDED_INTERSTITIAL
	: "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
	requestNonPersonalizedAdsOnly: true,
	keywords: ["money", "cash"],
});

function ButtonAd() {
	const [loaded, setLoaded] = useState(false);
	const [isModalVisible, setModalVisible] = useState(false);
	const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	useEffect(() => {
		const unsubscribeLoaded = rewarded.addAdEventListener(
			RewardedAdEventType.LOADED,
			() => {
				setLoaded(true);
			}
		);

		const unsubscribeEarned = rewarded.addAdEventListener(
			RewardedAdEventType.EARNED_REWARD,
			(reward) => {
				console.log("User earned reward of ", reward);
			}
		);

		// Start loading the rewarded ad straight away
		rewarded.load();

		// Unsubscribe from events on unmount
		return () => {
			unsubscribeLoaded();
			unsubscribeEarned();
		};
	}, []);

	// No advert ready to show yet
	if (!loaded) {
		return null;
	}

	return (
		<>
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
						onPress={() => {
							try {
								rewarded.show();
								toggleModal();
							} catch (err) {
								console.log(err);
								rewarded.load();
								setShowErrorModal(true);
								setModalVisible(false);
							}
						}}
					/>
					<Button title="Cancel" onPress={toggleModal} />
				</ModalView>
				{/* </Centered> */}
			</Modal>

			<Modal
				visible={showErrorModal}
				animationType="slide"
				presentationStyle="overFullScreen"
				statusBarTranslucent={true}
				hardwareAccelerated={true}
			>
				{/* <Centered> */}
				<ModalView>
					<Text>Ocorreu um erro</Text>

					<Button
						title="Cancel"
						onPress={() => setShowErrorModal(false)}
					/>
				</ModalView>
				{/* </Centered> */}
			</Modal>
			<Button
				title="Show Rewarded Ad"
				onPress={() => {
					setModalVisible(true);
				}}
			/>
		</>
	);
}

export default ButtonAd;
