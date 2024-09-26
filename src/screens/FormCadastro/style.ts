import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    text-align: left;
    background-color: ${({theme}) => theme.colors.appBackGround};
`;


export const HeaderStyle = styled.View`
    
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
    color: ${({theme}) => theme.colors.appBackGround};
    justify-content: center;
    margin-top: 24px;
    text-align: center;

`;
