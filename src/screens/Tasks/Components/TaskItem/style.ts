import styled from "styled-components/native";

const STATUS_COLOR_BACKGROUND = {
    completed: '#4FA44E',
    incomplete: '#BBBBBB',
}

interface CheckTaskButtonProps {
    status: 'completed' | 'incomplete'; 
}

typeof STATUS_COLOR_BACKGROUND

export const Container = styled.View`
    margin-bottom: 22px;
`

export const ContainerTaskItem = styled.View<CheckTaskButtonProps>`
    width: 100%;
    background-color: ${({ status }) => STATUS_COLOR_BACKGROUND[status]};
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
    background-color: ${({ status }) => status === 'completed' ? '#C4DBCC' : '#FFFFFF'};
    border-radius: 30px;
`

export const TitleTask = styled.Text<CheckTaskButtonProps>`
    font-size: 20px;
    flex: 1;
    margin-left: 10px; 
    margin-right: 10px;
    color: ${({ status }) => status === 'completed' ? '#FFFFFF' : '#000000'};
    text-decoration-line: ${({ status }) => status === 'completed' ? 'line-through' : 'none'};
`


