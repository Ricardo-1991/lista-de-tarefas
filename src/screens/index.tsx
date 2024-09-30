import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack } from '../navigation/AuthStack';
import { FormRegisterTaskStack } from '../navigation/FormRegisterTaskStack';


const RootStack = createStackNavigator();

export function RootNavigator() {
    return (
      <RootStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Auth" component={AuthStack} />
        <RootStack.Screen name="FormRegister" component={FormRegisterTaskStack} />
      </RootStack.Navigator>
    );
  }
