import styled from 'styled-components/native';

export const LoginContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 75px;
    background-color: ${props => props.theme.colors.appBackGround};
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
`;

export const LoginButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.secondaryButton};
    padding: 10px;
    width: 160px;
`

export const LoginButtonText = styled.Text`
    color: #FFFFFF;
    text-align: center;
`