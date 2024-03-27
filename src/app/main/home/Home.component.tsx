import React from 'react';
import { Text } from 'react-native';
import { useHomeHook } from './Home.hook';
import type { HomeStyles } from './Home.styles';
import type { StackScreenProps } from '@react-navigation/stack';
import type { MainNavigationStackRoutes } from '../../_shared/constants/routes';

export type HomeComponentProps = {} & StackScreenProps<MainNavigationStackRoutes, 'home'>;

export const HomeComponent = (props: HomeComponentProps) => {
    const {} = useHomeHook(props);

    return (
        <>
            <Text>HomeComponent</Text>
        </>
    );
};
