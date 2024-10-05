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

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
`;

export const ModalContainer = styled.View`
  width: 300px;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.appBackGround};
  border-radius: 10px;
  align-items: center; 
  gap: 20px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #FFFFFF; 
  padding: 5px; 
  border-radius: 5px; 
  position: absolute; 
  top: 10px; 
  right: 10px; 
  z-index: 1; 
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  border-color: transparent;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Fields = styled.View`
    width: 100%;  
`;

export const Input = styled.TextInput`
    height: 66px;
    background-color: #D9D9D9;
    border-radius: 8px;
    font-size: 16px;
    text-align: center;
`;

export const TextTitleField = styled.Text`
    color: #FFFFFF;
    font-family: 'Roboto-Regular'; 
    font-size: 20px;
    margin-bottom: 10px;
`;