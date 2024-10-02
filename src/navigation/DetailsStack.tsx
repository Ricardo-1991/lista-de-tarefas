import { createStackNavigator } from '@react-navigation/stack';
import {DetailsTask} from '../screens/DetailsTask/index';

const Stack = createStackNavigator()

export function DetailsTasks() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DetailsTask" component={DetailsTask} />
         </Stack.Navigator>
    )
}