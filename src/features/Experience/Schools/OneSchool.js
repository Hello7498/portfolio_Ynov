import React from 'react';
import { Text, Box, Image } from 'grommet';
import { LinkNext } from 'grommet-icons';


export const OneSchool = ({logoPath, nameSchool, nameFormation, dateBegin, DateEnd}) => {
    return (
        <Box>
            <Box
                align="center"
                justify="center"
            >
                <Box
                    width="xsmall"
                    height="xsmall"
                    
                >
                    <Image
                        fit="contain"
                        src={logoPath}
                    />
                </Box>
                <Box>
                    <Text
                        textAlign="center"
                    >
                        {nameSchool}
                    </Text>
                    <Text
                        textAlign="center"
                    >
                        {nameFormation}
                    </Text>
                    <Text
                        textAlign="center"
                    >
                        {dateBegin} <LinkNext size="small" /> {DateEnd}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}