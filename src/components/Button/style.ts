import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity<{ backgroundColor: string }>`
    width: 162px;
    height: 36px;
    border-radius: 8px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`

export const ButtonText = styled.Text`
    padding: 7px;
    color: #FFFFFF;
    text-align: center;
`