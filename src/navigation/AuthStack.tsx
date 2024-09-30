import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../screens/Login/index'

const Stack = createStackNavigator()

export function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
         </Stack.Navigator>
    )
}