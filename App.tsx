import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LayoutComponent } from './src/app/layout/Layout.component';

function App(): React.JSX.Element {
    return (
        <>
            <NavigationContainer>
                <LayoutComponent />
            </NavigationContainer>
        </>
    );
}

export default App;
