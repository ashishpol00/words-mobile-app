import React from 'react';
import { useLayoutHook } from './Layout.hook';
import { LayoutStyles } from './Layout.styles';
import { MainComponent } from '../main/Main.component';

export type LayoutComponentProps = {};

export const LayoutComponent = (props: LayoutComponentProps) => {
    const {} = useLayoutHook(props);

    return (
        <>
            <MainComponent />
        </>
    );
};
