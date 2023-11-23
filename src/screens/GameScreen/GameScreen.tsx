import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { shuffleArray } from "../../util/FisherYates";
import {
	AnswerButton,
	ButtonsContainer,
	CorrectText,
	GameContainer,
	WrongText,
} from "./GameScreen.styles";
import ButtonAd from "../../components/ButtonAd";

const GameScreen = ({ navigation }: { navigation: any }) => {
	const [showCorrectlyAnswer, setShowCorrectlyAnswer] =
		useState<boolean>(false);
	const [showWrongAnswer, setShowWrongAnswer] = useState<boolean>(false);
	const [winCount, setWinCount] = useState<number>(0);

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	const firstNumber = getRandomInt(0, 50);
	const secondNumber = getRandomInt(0, 50);
	const answer = firstNumber + secondNumber;

	const options = [
		getRandomInt(0, 100),
		getRandomInt(0, 100),
		getRandomInt(0, 100),
		answer,
	];

	const handleConfirm = (option: number) => {
		if (option === answer) {
			setShowWrongAnswer(false);

			setWinCount((prev) => prev + 1);
			setShowCorrectlyAnswer(true);
			return;
		}

		setShowCorrectlyAnswer(false);

		setShowWrongAnswer(true);
	};

	const onReward = () => {
		navigation.navigate("HomeScreen");
	};

	return (
		<GameContainer>
			{showWrongAnswer ? (
				<ButtonAd onReward={onReward} />
			) : (
				<>
					<Text>
						Quanto é {firstNumber} + {secondNumber}?
					</Text>
					<ButtonsContainer>
						{shuffleArray(options).map((item) => (
							<AnswerButton onPress={() => handleConfirm(item)}>
								<Text>{item}</Text>
							</AnswerButton>
						))}
					</ButtonsContainer>
				</>
			)}

			{showCorrectlyAnswer && <CorrectText>Você acertou!</CorrectText>}
			{showWrongAnswer && <WrongText>Você errou!</WrongText>}
			<Text>Quantidade de acertos: {winCount}</Text>
		</GameContainer>
	);
};

export default GameScreen;
