import { StackNavigationProp } from '@react-navigation/stack';

// Define as rotas e seus parâmetros
export type RootStackParamList = {
  Home: undefined;
  FormRegister: undefined;
  Tasks: undefined;
  DetailsTask: undefined;
};

// Exportando o tipo do `useNavigation` já pronto
export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
