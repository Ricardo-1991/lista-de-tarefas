import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${props => props.theme.colors.appBackGround};
    flex: 1;
`

export const TextTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const Input = styled.TextInput`
    background-color: ${({theme}) => theme.colors.lightGray};
    height: 56px;
    border-radius: 50px;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
    padding-left: 40px;
`;

export const HeaderTask = styled.View`
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 80%;
`

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`

export const Main = styled.View`
    flex: 1;
    padding: 23px 10px;
`
