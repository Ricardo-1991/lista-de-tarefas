import { createStackNavigator } from '@react-navigation/stack';
import {FormRegisterTask} from '../screens/FormRegisterTask/index'

const Stack = createStackNavigator()

export function FormRegisterTaskStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={FormRegisterTask} />
         </Stack.Navigator>
    )
}