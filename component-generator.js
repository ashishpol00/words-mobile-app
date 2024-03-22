const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const componentTemplate = C_NAME => `import React from 'react';
import { Text } from 'react-native';
import { use${C_NAME}Hook } from './${C_NAME}.hook';
import { ${C_NAME}Styles } from './${C_NAME}.styles';

export type ${C_NAME}ComponentProps = {};

export const ${C_NAME}Component = (props: ${C_NAME}ComponentProps) => {
    const {} = use${C_NAME}Hook(props);

    return (
        <>
            <Text>${C_NAME}Component</Text>
        </>
    );
};
`;
const hookTemplate = C_NAME => `import { ${C_NAME}ComponentProps } from './${C_NAME}.component';

export const use${C_NAME}Hook = (props: ${C_NAME}ComponentProps) => {
    const {} = props;

    return {};
};
`;
const stylesTemplate = C_NAME => `import { StyleSheet } from 'react-native';

export const ${C_NAME}Styles = StyleSheet.create({});
`;

readline.question('COMPONENT_NAME = ', name => {
    if (!name) return;

    const COMPONENT_NAME = name;

    const COMPONENT_FILE_NAME = `${COMPONENT_NAME}.component.tsx`;
    const HOOK_FILE_NAME = `${COMPONENT_NAME}.hook.ts`;
    const STYLES_FILE_NAME = `${COMPONENT_NAME}.styles.ts`;

    fs.writeFileSync(COMPONENT_FILE_NAME, componentTemplate(COMPONENT_NAME));
    fs.writeFileSync(HOOK_FILE_NAME, hookTemplate(COMPONENT_NAME));
    fs.writeFileSync(STYLES_FILE_NAME, stylesTemplate(COMPONENT_NAME));

    readline.close();
});
