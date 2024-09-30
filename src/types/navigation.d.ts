import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Auth: undefined;
    FormRegister: undefined;
    // Adicione outras rotas conforme necessário
  };

  // Exportando o tipo de navigation para uso em qualquer componente
  export type NavigationProp<RouteName extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, RouteName>;