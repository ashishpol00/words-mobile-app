import React from 'react';
import { Text } from 'react-native';
import { useAuthHook } from './Auth.hook';
import { AuthStyles } from './Auth.styles';

export type AuthComponentProps = {};

export const AuthComponent = (props: AuthComponentProps) => {
    const {} = useAuthHook(props);

    return (
        <>
            <Text>AuthComponent</Text>
        </>
    );
};
