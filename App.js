import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        
        <NavigationContainer>
            
            <Stack.Navigator screenOptions={{headerShown: false}}>
                
                <Stack.Screen
                    name='LoginPage' 
                    component={LoginPage}
                />
                <Stack.Screen 
                    name='RegisterPage' 
                    component={RegisterPage}
                />
                <Stack.Screen 
                    name='ForgotPasswordPage' 
                    component={ForgotPasswordPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#282828",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 200,
        height: 200,
        marginBottom: '20px'
    },
});
