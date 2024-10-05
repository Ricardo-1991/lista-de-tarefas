import { ButtonContainer, ButtonText } from './style'
import { TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    backgroundColor: string; 
}

export function CustomButton ( props: CustomButtonProps) {
    const { title, backgroundColor, ...rest } = props;
    
    return (
        <ButtonContainer backgroundColor={backgroundColor} {...rest}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    )
}