import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Container } from './style';

import {HeaderApp} from '../../components/Header'
import { RootNavigationProp } from "../../types/navigation";


export function DetailsTask(){
    const navigation = useNavigation<RootNavigationProp>();
    return (
        <Container>
            <HeaderApp>
                <AntDesign name="back" size={50} color="black" style={{
                    marginTop: 80,
                    marginLeft: 11,
                }}
                onPress={() => navigation.goBack()}
                />
            </HeaderApp>
        </Container>
    )
}