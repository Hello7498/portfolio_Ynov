import React from 'react';
import { Text, Box, Avatar, Grid, Button } from 'grommet';
import { Facebook, Instagram, Linkedin, Github } from 'grommet-icons';

export const Profil = () => {
    return (

        <Grid
            rows={['small']}
            columns={['1/3', '1/3', '1/3']}
            areas={[
                { name: 'contact', start: [0, 0], end: [0, 0] },
                { name: 'photo', start: [1, 0], end: [1, 0] },
                { name: 'resaux', start: [2, 0], end: [2, 0] },
            ]}
        >
            <Box
                justify="center"
                // align="center"
                gridArea="contact"
                pad="small"
            >
                <Text
                    weight="bold"
                    // textAlign="center"
                    margin="small"
                >
                {"Contact :"}
                </Text>
                <Text
                    margin="small"
                >
                {"Hugo.boehm98@gmail.com"}
                </Text>
                <Text
                    margin="small"
                >
                {"44 rue Merly APT 5 31000 Toulouse"}
                </Text>
            </Box>
            <Box
                gap="small"
                align="center"
                gridArea="photo"
            >
                <Avatar
                    src="Profil2.jpg"
                    size="myLarge"

                />
                <Box 
                    direction="row" 
                    gap="xsmall">
                    <Text
                        textAlign="center"
                        weight="bold"
                        size="xlarge"
                    >
                        {"BOEHM"}
                    </Text>
                    <Text
                        size="xlarge"
                        textAlign="center"
                    >
                        {"Hugo"}
                    </Text>
                </Box>
            </Box>
            <Box
                gridArea="resaux"
                justify="center"
                align="center"
                direction="row"
                gap="xsmall"
            >
                <Button icon={<Facebook size='large'/>} href= "https://www.facebook.com/hugo.leblond.9"></Button>
                <Button icon={<Linkedin size='large'/>} href= "https://www.linkedin.com/in/hugo-boehm-89b563173/" ></Button>
                <Button icon={<Instagram size='large'/>} href= "https://www.instagram.com/hugo.boehm/" ></Button>
                <Button icon={<Github size='large'/>} href= "https://github.com/Hello7498" ></Button>

            </Box>
        </Grid>
    )
};
