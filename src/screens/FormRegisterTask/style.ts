import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    text-align: left;
    background-color: ${props => props.theme.colors.appBackGround};
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
    font-size: 16px;
    text-align: center;
`;

export const ContainerButtom = styled.View`
    width: 100%;
    padding: 10px;
    padding-bottom: 30px;
    flex-direction: row;    
    margin-top: 140px;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1;
`;

export const ButtomRegister = styled.TouchableOpacity`
    width: 162px;
    height: 36px;
    border-radius: 8px;
    background-color: blue;
`;

export const ButtomCancel = styled.TouchableOpacity`

    width: 162px;
    height: 36px;
    border-radius: 8px;
    background-color: gray;
    margin-left: 32px;

`;

export const TextButtom = styled.Text`

    padding: 7px;
    color: #FFFFFF;
    text-align: center;

`;