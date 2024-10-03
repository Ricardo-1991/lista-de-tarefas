import { createStackNavigator } from '@react-navigation/stack';
import {Tasks} from '../screens/Tasks/index'

const Stack = createStackNavigator()

export function TaskStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tasks" component={Tasks} />
         </Stack.Navigator>
    )
}