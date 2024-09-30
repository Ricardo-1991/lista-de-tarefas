import styled from 'styled-components/native';

export const LoginContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.appBackGround};
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 75px;
`;

export const LoginButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondaryButton};
    padding: 10px;
    width: 160px;
    margin-top: 75px;
`;

export const LoginButtonText = styled.Text`
    color: #FFFFFF;
    text-align: center;
`