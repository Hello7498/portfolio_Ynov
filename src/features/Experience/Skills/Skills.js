import React from 'react';
import { Grid, Text } from 'grommet';
import { OneSkill } from './OneSkill';
import {useSelector} from 'react-redux'
import { selectLanguage} from '../../Languages/languageSlice';
import { languageJSON } from '../../Languages/Languages'

export const Skills = () => {

    const language = useSelector(selectLanguage)

    return (
            <Grid
                rows={['xsmall', 'xsmall', 'xsmall', 'xsmall', 'xsmall', 'xsmall']}
                columns={['1/4', '1/4', '1/4', '1/4']}
                areas={[
                    { name: 'title1', start: [0, 0], end: [3, 0] },
                    { name: 'skill1', start: [0, 1], end: [0, 1] },
                    { name: 'skill2', start: [1, 1], end: [1, 1] },
                    { name: 'skill3', start: [2, 1], end: [2, 1] },
                    { name: 'skill4', start: [3, 1], end: [3, 1] },
                    { name: 'title2', start: [0, 2], end: [3, 2] },
                    { name: 'skill5', start: [0, 3], end: [0, 3] },
                    { name: 'skill6', start: [1, 3], end: [1, 3] },
                    { name: 'skill7', start: [2, 3], end: [2, 3] },
                    { name: 'skill8', start: [3, 3], end: [3, 3] },
                    { name: 'title3', start: [0, 4], end: [3, 4] },
                    { name: 'skill9', start: [0, 5], end: [0, 5] },
                    { name: 'skill10', start: [1, 5], end: [1, 5] },
                    { name: 'skill11', start: [2, 5], end: [2, 5] },
                    { name: 'skill12', start: [3, 5], end: [3, 5] },

                ]}
            >
                <Text
                    textAlign="center"
                    margin="medium"
                    weight="bold"
                    size="large"
                    gridArea="title1"
                >
                    {languageJSON[language].skills.title2}
                </Text>
                <OneSkill nameGird={"skill1"} percent={95} nameSkill={"Node.js"} ></OneSkill>
                <OneSkill nameGird={"skill2"} percent={85} nameSkill={"Python"} ></OneSkill>
                <OneSkill nameGird={"skill3"} percent={80} nameSkill={"Java"} ></OneSkill>
                <OneSkill nameGird={"skill4"} percent={50} nameSkill={"C#"} ></OneSkill>
                <Text
                    textAlign="center"
                    margin="medium"
                    weight="bold"
                    size="large"
                    gridArea="title2"
                >
                    {languageJSON[language].skills.title2}
                </Text>
                <OneSkill nameGird={"skill5"} percent={100} nameSkill={"HTML"} ></OneSkill>
                <OneSkill nameGird={"skill6"} percent={100} nameSkill={"CSS"} ></OneSkill>
                <OneSkill nameGird={"skill7"} percent={80} nameSkill={"Git"} ></OneSkill>
                <OneSkill nameGird={"skill8"} percent={75} nameSkill={languageJSON[language].skills.Agile_methods} ></OneSkill>
                <Text
                    textAlign="center"
                    margin="medium"
                    weight="bold"
                    size="large"
                    gridArea="title3"
                >
                    {languageJSON[language].skills.title3}
                </Text>
                <OneSkill nameGird={"skill9"} percent={95} nameSkill={languageJSON[language].skills.Autonomy} ></OneSkill>
                <OneSkill nameGird={"skill10"} percent={95} nameSkill={languageJSON[language].skills.Adaptability} ></OneSkill>
                <OneSkill nameGird={"skill11"} percent={90} nameSkill={languageJSON[language].skills.Team_work} ></OneSkill>
                <OneSkill nameGird={"skill12"} percent={75} nameSkill={languageJSON[language].skills.Conflicts_resolution} ></OneSkill>
            </Grid>
    )

}