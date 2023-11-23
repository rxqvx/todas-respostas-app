import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import {
	RewardedAd,
	RewardedAdEventType,
	TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
	? TestIds.REWARDED
	: "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
	requestNonPersonalizedAdsOnly: true,
	keywords: ["cash", "money"],
});

export default function ButtonAd({
	onReward,
}: {
	onReward?: (reward: { amount: number; type: string }) => void;
}) {
	const [loaded, setLoaded] = useState(false);

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
				if (onReward) onReward(reward);
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
	}, [rewarded]);

	// No advert ready to show yet
	if (!loaded) {
		rewarded.load();

		return (
			<>
				<Text>
					Nenhum anúncio pronto para exibição ainda, carregando...
				</Text>
			</>
		);
	}

	return (
		<Button
			title="Show Rewarded Ad"
			onPress={() => {
				try {
					rewarded.load();
					rewarded.show();
				} catch (err) {
					console.log("error:", err);
				}
			}}
		/>
	);
}
