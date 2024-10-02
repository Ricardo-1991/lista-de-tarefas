import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    text-align: left;
    background-color: ${({theme}) => theme.colors.appBackGround};
`;

export const Header = styled.View`
    background-color: #FFFFFF;
    width: 100%;
    height: 141px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

export const TextTitle = styled.Text`
    font-family: 'Roboto-Bold'; 
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
    flex: 1;
    text-align: center;
    margin-right: 48px;
    margin-top: 80px;
`;


export const TextTitleField = styled.Text`

    color: #FFFFFF;
    font-family: 'Roboto-Regular'; 
    font-size: 20px;
    margin-left: 12px;

`;

export const Fields = styled.View`

    margin-top: 24px;
    margin-left: 12px;

`;

export const Input = styled.TextInput`

    margin-left: 12px;
    margin-top: 10px;
    width: 204px;
    height: 66px;
    background-color: #D9D9D9;
    border-radius: 8px;

`;