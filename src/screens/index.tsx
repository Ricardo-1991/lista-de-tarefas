import { createStackNavigator } from '@react-navigation/stack';
import { HomeStack } from '../navigation/HomeStack';
import { FormRegisterTaskStack } from '../navigation/FormRegisterTaskStack';
import { Tasks } from './Tasks';
import { DetailsTask } from './DetailsTask';


const RootStack = createStackNavigator();

export function RootNavigator() {
    return (
      <RootStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={HomeStack} />
        <RootStack.Screen name="Tasks" component={Tasks} />
        <RootStack.Screen name="DetailsTask" component={DetailsTask} />
        <RootStack.Screen name="FormRegister" component={FormRegisterTaskStack} />
      </RootStack.Navigator>
    );
  }
