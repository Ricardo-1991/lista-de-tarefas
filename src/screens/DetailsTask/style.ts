import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    text-align: left;
    background-color: ${({theme}) => theme.colors.appBackGround};
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

export const TextTask = styled.Text`

    font-family: 'Roboto';
    font-size: 20px;
    justify-content: left;
    color: #FFFFFF;

`;

export const TextSubTitle = styled.Text`

    font-family: 'Roboto';
    font-size: 16px;
    justify-content: left;
    color: #FFFFFF;

`;

export const ContainerTasks = styled.View`

    width: 100%;
    padding-left: 20px;
    padding-top: 20px;
    flex-direction: line;    
    margin-top: 20px;

`;