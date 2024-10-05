import { createStackNavigator } from '@react-navigation/stack';
import { HomeStack } from '../navigation/HomeStack';
import { FormRegisterTaskStack } from '../navigation/FormRegisterTaskStack';
import { Tasks } from './Tasks';
import { DetailsTask } from './DetailsTask';

const RootStack = createStackNavigator();

export function RootNavigator() {
    return (
      <RootStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="HomeScreen" component={HomeStack} />
        <RootStack.Screen name="TasksScreen" component={Tasks} />
        <RootStack.Screen name="DetailsTaskScreen" component={DetailsTask} />
        <RootStack.Screen name="FormRegisterScreen" component={FormRegisterTaskStack} />
      </RootStack.Navigator>
    );
  }
