import styled from "styled-components/native";

export const AnswerButton = styled.TouchableOpacity`
	border-width: 2px;
	border-color: #000;
	width: 100%;
	color: #000;
`;

export const ButtonsContainer = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 5px;
`;

export const GameContainer = styled.View`
	flex: 1;
	padding: 20px;
`;

export const CorrectText = styled.Text`
	color: green;
`;

export const WrongText = styled.Text`
	color: red;
`;
