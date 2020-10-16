import React from 'react';
import { Skills } from './Skills/Skills'
import { ExperiencePro } from './ExpreriencePro'
import { Text, Box, Grid, Collapsible, Button } from 'grommet';
import { CaretDownFill, CaretUpFill } from 'grommet-icons';

export const Experience = () => {
    const [skillsIsOpen, setSkillsIsOpen] = React.useState(true);
    const [workIsOpen, setWorkIsOpen] = React.useState(false);
    const [scoolIsOpen, setScoolIsOpen] = React.useState(false);
    function openItem(item) {
        switch (item) {
            case "skills":
                setScoolIsOpen(false)
                setWorkIsOpen(false)
                setSkillsIsOpen(!skillsIsOpen)
                break;

            case "work":
                setScoolIsOpen(false)
                setWorkIsOpen(!workIsOpen)
                setSkillsIsOpen(false)
                break;
            case "scool":
                setScoolIsOpen(!scoolIsOpen)
                setWorkIsOpen(false)
                setSkillsIsOpen(false)
                break;

            default:
                setScoolIsOpen(false)
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
                    { name: 'scool', start: [0, 0], end: [0, 0] },
                    { name: 'work', start: [1, 0], end: [1, 0] },
                    { name: 'skills', start: [2, 0], end: [2, 0] },
                ]}
            >
                <Box
                    gridArea="scool"
                    justify="center"
                    align="center"
                >
                    <Button color="light-3" onClick={() => openItem("skills")} label="Skills" icon={skillsIsOpen ? (<CaretUpFill />) : (<CaretDownFill />)} reverse />

                </Box>

                <Box
                    gridArea="work"
                    justify="center"
                    align="center"
                >
                    <Button color="light-3" onClick={() => openItem("work")} label="Experience" icon={workIsOpen ? (<CaretUpFill />) : (<CaretDownFill />)} reverse />
                </Box>

                <Box
                    gridArea="skills"
                    justify="center"
                    align="center"
                >
                    <Button color="light-3" onClick={() => openItem("scool")} label="Scool" icon={scoolIsOpen ? (<CaretUpFill />) : (<CaretDownFill />)} reverse />

                </Box>
            </Grid>
            <Collapsible open={scoolIsOpen}>
                <Box
                    background="light-1"
                    round="small"
                    pad="medium"
                    align="center"
                    justify="center"
                >
                    <Text>This is a box inside a Collapsible component</Text>
                </Box>
            </Collapsible>
            <Collapsible open={workIsOpen}>
                <Box
                    background="light-1"
                    round="small"
                    pad="medium"
                >
                    <ExperiencePro/>
                </Box>
            </Collapsible>
            <Collapsible open={skillsIsOpen}>
                <Box
                    background="light-1"
                    round="small"
                    pad="medium"
                >
                    <Skills/>
                </Box>
            </Collapsible>
        </Box>

    )
}