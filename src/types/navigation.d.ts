import { StackNavigationProp } from '@react-navigation/stack';

// Define as rotas e seus parâmetros
export type RootStackParamList = {
  Home: undefined;
  FormRegister: undefined;
  Tasks: undefined;
  DetailsTask: {task: TaskProps['task']};
};

// Exportando o tipo do `useNavigation` já pronto
export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
