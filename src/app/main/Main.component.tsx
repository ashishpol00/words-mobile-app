import React from 'react';
import { useMainHook } from './Main.hook';
import { MainStyles } from './Main.styles';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeComponent } from './home/Home.component';
import { MainNavigationStackRoutes } from '../_shared/constants/routes';

const MainNavigationStack = createStackNavigator<MainNavigationStackRoutes>();

export type MainComponentProps = {};

export const MainComponent = (props: MainComponentProps) => {
    const {} = useMainHook(props);

    return (
        <>
            <MainNavigationStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <MainNavigationStack.Screen name='home' component={HomeComponent} />
            </MainNavigationStack.Navigator>
        </>
    );
};
