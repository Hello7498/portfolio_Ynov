import React from 'react';
import { Text, Box, Image, Accordion, AccordionPanel } from 'grommet';
import { CaretNext, LinkNext } from 'grommet-icons';
import {useSelector} from 'react-redux'
import { selectLanguage} from '../Languages/languageSlice';
import { languageJSON } from '../Languages/Languages'


export const ExperiencePro = () => {

    const language = useSelector(selectLanguage)

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
                                {languageJSON[language].experiencesPro.exp1.Status}
                            </Text>
                            <Text>
                                {"ARAPL Grand Sud"}
                            </Text>
                            <Text>
                                {languageJSON[language].experiencesPro.exp1.Begin_date} <LinkNext size="small" /> {languageJSON[language].experiencesPro.exp1.End_date}
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
                                    <li>{languageJSON[language].experiencesPro.exp1.Mission1}</li>
                                    <li>{languageJSON[language].experiencesPro.exp1.Mission2}</li>
                                    <li>{languageJSON[language].experiencesPro.exp1.Mission3}</li>
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
                            {languageJSON[language].experiencesPro.exp2.Status}
                            </Text>
                            <Text>
                                {"Capgemini"}
                            </Text>
                            <Text>
                                {languageJSON[language].experiencesPro.exp2.Begin_date} <LinkNext size="small" /> {languageJSON[language].experiencesPro.exp2.End_date}
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
                                    <li>{languageJSON[language].experiencesPro.exp2.Mission1}</li>
                                </ul>

                            </Box>
                        </AccordionPanel>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )

}