import React, { useState } from "react";
import { View, Text, Button, Modal } from "react-native";
import {
	BannerAd,
	BannerAdSize,
	TestIds,
} from "react-native-google-mobile-ads";
import { Centered, ModalView } from "./HomeScreen.styles";
import ButtonAd from "../../components/ButtonAd";

const adUnitId = __DEV__
	? TestIds.BANNER
	: "ca-app-pub-0000000000000000/000000000";

const HomeScreen: React.FC = () => {
	return (
		<View
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
			}}
		>
			<Text>Ad Screen</Text>

			<ButtonAd />

			<BannerAd
				unitId={adUnitId}
				size={BannerAdSize.FULL_BANNER}
				requestOptions={{ requestNonPersonalizedAdsOnly: true }}
			/>
		</View>
	);
};

export default HomeScreen;
