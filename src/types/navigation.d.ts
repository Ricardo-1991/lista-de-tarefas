import { StackNavigationProp } from '@react-navigation/stack';

// Define as rotas e seus parâmetros
export type RootStackParamList = {
  HomeScreen: undefined;
  FormRegisterScreen: undefined;
  TasksScreen: undefined;
  DetailsTaskScreen: {currentTaskId: string};
};

// Exportando o tipo do `useNavigation` já pronto
export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
