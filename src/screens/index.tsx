import { createStackNavigator } from '@react-navigation/stack';
import { HomeStack } from '../navigation/HomeStack';
import { FormRegisterTaskStack } from '../navigation/FormRegisterTaskStack';
import { Tasks } from './Tasks';
import { AppContainer } from '../../AppStyle';

const RootStack = createStackNavigator();

export function RootNavigator() {
    return (
      <AppContainer>
        <RootStack.Navigator  initialRouteName="HomeScreen" screenOptions={{ headerShown: false}}>
          <RootStack.Screen name="HomeScreen" component={HomeStack} />
          <RootStack.Screen name="Tasks" component={Tasks} />
          <RootStack.Screen name="FormRegister" component={FormRegisterTaskStack} />
        </RootStack.Navigator>
      </AppContainer>
    );
  }
