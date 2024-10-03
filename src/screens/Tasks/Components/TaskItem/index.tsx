import {View } from "react-native";
import { CheckTaskButton, Container, DescriptionTask } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';

export function TaskItem() {
    const status = true
    return (
        <View style={{gap: 22}}>
            <Container>
                <CheckTaskButton>  
                     
                </CheckTaskButton>
                <DescriptionTask numberOfLines={1} ellipsizeMode="tail">Criar Layout do App no Figma</DescriptionTask>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                    <AntDesign name="edit" size={28} color="#FFFFFF" />
                    <AntDesign name="close" size={28} color="#FFFFFF" />
                </View>
            </Container>

            <Container status={status? 'completed' : 'incomplete'}>
                <CheckTaskButton status={status? 'completed' : 'incomplete'}>
                    <AntDesign name="check" size={18} color="black" />
                </CheckTaskButton>
                <DescriptionTask status={status? 'completed' : 'incomplete'} numberOfLines={1} ellipsizeMode="tail">Criar Layout do App no Figma</DescriptionTask>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                    <AntDesign name="edit" size={28} color="#FFFFFF" />
                    <AntDesign name="close" size={28} color="#FFFFFF" />
                </View>
            </Container>
        </View>
    )
}