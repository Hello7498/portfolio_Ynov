import React from 'react';
import { Text, Box, Grid, Image } from 'grommet';

export const Profil = () => {
    return (

        <Grid
            rows={['small']}
            columns={['1/4', '3/4']}
            areas={[
                { name: 'imgProfil', start: [0, 0], end: [0, 0] },
                { name: 'desciptionProfil', start: [1, 0], end: [1, 0] },
            ]}
        >
            <Box
                gridArea="imgProfil"
                background="accent-1"
                animation={{ type: "zoomIn", duration: 1000 }}
                margin="xsmall"
            >
                <Image
                    fit="contain"
                    src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                    margin="small" />
            </Box>
            <Box
                gridArea="desciptionProfil"
                background="accent-3"
                animation={{ type: "zoomIn", duration: 1000 }}
                margin="xsmall"
                >
                <Text
                    alignSelf="center" 
                    margin="small"
                    >
                    Ingénieur Informatique
                </Text>
                <Text
                    margin="small"
                    >
                    Plein de text Plein de textPlein de textPlein de textPlein de textPlein de textPlein de textPlein de textPlein de textPlein de textPlein de textPlein de textPlein de textPlein de textPlein de text
                </Text>
            </Box>
        </Grid>
    )
};
