import styled from "styled-components/native";

const STATUS_COLOR = {
    completed: '#4FA44E',
    incomplete: '#BBBBBB',
}

interface CheckTaskButtonProps {
    status: 'completed' | 'incomplete'; 
}

typeof STATUS_COLOR

export const Container = styled.View<CheckTaskButtonProps>`
    width: 100%;
    background-color: ${({ status }) => status ? STATUS_COLOR[status] : '#BBBBBB'};
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: space-between;
`

export const CheckTaskButton = styled.TouchableOpacity<CheckTaskButtonProps>`
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: ${({ status }) => status ? '#C4DBCC' : '#FFFFFF'};
    border-radius: 30px;
`

export const DescriptionTask = styled.Text`
    font-size: 20px;
    flex: 1;
    margin-left: 10px; 
    margin-right: 10px;
`


