import React from 'react';
import { Text, Box, Grid, Image } from 'grommet';

export const Experience = () => {
    return (
        <Grid
            rows={['50px']}
            columns={['1/3', '1/3','1/3']}
            areas={[
                { name: 'scool', start: [0, 0], end: [0, 0] },
                { name: 'work', start: [1, 0], end: [1, 0] },
                { name: 'perso', start: [2, 0], end: [2, 0] },
            ]}
        >
            <Box 
                gridArea="scool"
                 >
                aaaaaa
            </Box>
            
            <Box 
                gridArea="work"
                >
                bbbbb
            </Box>
             
            <Box 
                gridArea="perso"
                >
                cccccc
            </Box>
        </Grid>
    )
}