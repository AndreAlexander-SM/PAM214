import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';

const Stack = createNativeStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="home">
<Stack.Screen name="home" component={Home} />
<Stack.Screen name="profile" component={Profile} />
<Stack.Screen name="settings" component={Settings} />
</Stack.Navigator>
</NavigationContainer>
);
}
