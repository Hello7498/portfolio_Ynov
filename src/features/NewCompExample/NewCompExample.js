import React from 'react';
import { Text, Box, Button } from 'grommet';

export const NewCompExample = () => {
    const [count, setCount] = React.useState(0);
    return (
        <Box justify="center" alignContent="center">
            <Text>Exemple import New Componant</Text>
            <Text> {count} </Text>
            <Button
                label="+1" 
                onClick={() => setCount( count + 1)}
            >
            </Button>
        </Box >
    )
};
