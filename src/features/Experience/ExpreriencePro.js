import React from 'react';
import { Text, Box, Image, Accordion, AccordionPanel } from 'grommet';
import { CaretNext, LinkNext } from 'grommet-icons';


export const ExperiencePro = () => {
    return (
        <Box>
            <Box
                align="center"
                justify="center"
                direction="row"
                gap="large"
            >
                <Box
                width="large"
                >
                    <Box
                        align="center"
                        justify="center"
                        direction="row"
                    >


                        <Box
                            width="xsmall"
                            height="xsmall"
                        >
                            <Image
                                fit="contain"
                                src="arapl-logo.jpg"
                            />
                        </Box>
                        <Box
                            pad="large"
                        >
                            <Text>
                                {"Web developer intern"}
                            </Text>
                            <Text>
                                {"ARAPL Grand Sud"}
                            </Text>
                            <Text>
                                {"4, April 2018"} <LinkNext size="small" /> {"8, July 2018"}
                            </Text>
                        </Box>
                    </Box>
                    <Accordion>
                        <AccordionPanel
                            justify="center"
                            label={<Text> {"Details"} </Text>}
                        >
                            <Box
                                width="large"
                            >
                                <ul>
                                    <li>Development of a mobile application for tax simulation</li>
                                    <li>Development of an adaptive satisfaction survey</li>
                                    <li>Development of a tool allowing to visualize the results of the survey</li>
                                </ul>
                            </Box>
                        </AccordionPanel>
                    </Accordion>
                </Box>
                <CaretNext size="large" />
                <Box
                    width="large"
                >
                    <Box
                        align="center"
                        justify="center"
                        direction="row"
                    >
                        <Box
                            width="xsmall"
                            height="xsmall"
                        >
                            <Image
                                fit="contain"
                                src="capgemini-logo.jpg"
                            />
                        </Box>
                        <Box
                            pad="large"
                        >
                            <Text>
                                {"Apprenticeship Consultant"}
                            </Text>
                            <Text>
                                {"Capgemini"}
                            </Text>
                            <Text>
                                {"1, October 2019"} <LinkNext size="small" /> {"1, October 2021"}
                            </Text>
                        </Box>
                    </Box>
                    <Accordion>
                        <AccordionPanel
                            justify="center"
                            label={<Text justify="end">{"Details"}</Text>}
                        >
                            <Box
                                 width="large"
                            >
                                <ul>
                                    <li>development of a suite of applications (SoTesty) to facilitate the work of automation testers.</li>
                                </ul>

                            </Box>
                        </AccordionPanel>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )

}