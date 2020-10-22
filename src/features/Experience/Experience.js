import React from 'react';
import { Skills } from './Skills/Skills'
import { ExperiencePro } from './ExpreriencePro'
import { Schools } from './Schools/Schools'
import { Box, Grid, Collapsible, Button } from 'grommet';
import { CaretDownFill, CaretUpFill } from 'grommet-icons';
import {useSelector} from 'react-redux'
import { selectLanguage} from '../Languages/languageSlice';
import { languageJSON } from '../Languages/Languages'

export const Experience = () => {
    const language = useSelector(selectLanguage)
    const [skillsIsOpen, setSkillsIsOpen] = React.useState(true);
    const [workIsOpen, setWorkIsOpen] = React.useState(false);
    const [schoolIsOpen, setschoolIsOpen] = React.useState(false);
    function openItem(item) {
        switch (item) {
            case "skills":
                setschoolIsOpen(false)
                setWorkIsOpen(false)
                setSkillsIsOpen(!skillsIsOpen)
                break;

            case "work":
                setschoolIsOpen(false)
                setWorkIsOpen(!workIsOpen)
                setSkillsIsOpen(false)
                break;
            case "school":
                setschoolIsOpen(!schoolIsOpen)
                setWorkIsOpen(false)
                setSkillsIsOpen(false)
                break;

            default:
                setschoolIsOpen(false)
                setWorkIsOpen(false)
                setSkillsIsOpen(false)
                break;
        }
    }
    return (
        <Box>
            <Grid
                rows={['50px']}
                columns={['1/3', '1/3', '1/3']}
                areas={[
                    { name: 'school', start: [0, 0], end: [0, 0] },
                    { name: 'work', start: [1, 0], end: [1, 0] },
                    { name: 'skills', start: [2, 0], end: [2, 0] },
                ]}
            >
                <Box
                    gridArea="school"
                    justify="center"
                    align="center"
                >
                    <Button color="light-3" onClick={() => openItem("skills")} label={languageJSON[language].experience.Skills} icon={skillsIsOpen ? (<CaretUpFill />) : (<CaretDownFill />)} reverse />

                </Box>

                <Box
                    gridArea="work"
                    justify="center"
                    align="center"
                >
                    <Button color="light-3" onClick={() => openItem("work")} label={languageJSON[language].experience.Experiences} icon={workIsOpen ? (<CaretUpFill />) : (<CaretDownFill />)} reverse />
                </Box>

                <Box
                    gridArea="skills"
                    justify="center"
                    align="center"
                >
                    <Button color="light-3" onClick={() => openItem("school")} label={languageJSON[language].experience.Schools} icon={schoolIsOpen ? (<CaretUpFill />) : (<CaretDownFill />)} reverse />

                </Box>
            </Grid>
            <Collapsible open={schoolIsOpen}>
                <Box
                    background="white"
                    round="small"
                    pad="medium"
                    align="center"
                    justify="center"
                >
                    <Schools />

                </Box>
            </Collapsible>
            <Collapsible open={workIsOpen}>
                <Box
                    background="white"
                    round="small"
                    pad="medium"
                >
                    <ExperiencePro />
                </Box>
            </Collapsible>
            <Collapsible open={skillsIsOpen}>
                <Box
                    background="white"
                    round="small"
                    pad="medium"
                >
                    <Skills />
                </Box>
            </Collapsible>
        </Box>

    )
}