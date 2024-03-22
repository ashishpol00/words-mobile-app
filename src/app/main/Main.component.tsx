import React from 'react';
import { Text } from 'react-native';
import { useMainHook } from './Main.hook';
import { MainStyles } from './Main.styles';

export type MainComponentProps = {};

export const MainComponent = (props: MainComponentProps) => {
    const {} = useMainHook(props);

    return (
        <>
            <Text>MainComponent</Text>
        </>
    );
};
