import styled from 'styled-components/native';

export const AppContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.appBackGround};
    align-items: center;
    justify-content: center;
    padding: 20px;
`