import React from 'react';
import { Box, Text } from 'grommet';
import { CaretUp } from 'grommet-icons';
import { OneSchool } from './OneSchool';
import {useSelector} from 'react-redux'
import {fr, en, selectLanguage} from '../../Languages/languageSlice';
import { languageJSON } from '../../Languages/Languages'




export const Schools = () => {

    const language = useSelector(selectLanguage)

    return (
        <Box
            align="center"
            gap="medium"
        >
             <Text> {language}</Text>
            <Text> {languageJSON.fr.bonjour}</Text>
            <OneSchool
                logoPath="ynov-logo.jpg"
                nameSchool="Toulouse Ynov Campus"
                nameFormation="Master: Expert in Software Development, Mobile and IoT"
                dateBegin="2019"
                DateEnd="2021"
            />
            <CaretUp
                size="large"
            />
            <OneSchool
                logoPath="iut-logo.png"
                nameSchool="University Institute of Technology Paul Sabatier Toulouse"
                nameFormation="Professional license : Software development and quality"
                dateBegin="2018"
                DateEnd="2019"
            />
            <CaretUp
                size="large"
            />
            <OneSchool
                logoPath="iut-logo.png"
                nameSchool="University Institute of Technology Paul Sabatier Toulouse"
                nameFormation=" DUT diploma : Computer Science"
                dateBegin="2016"
                DateEnd="2018"
            />

        </Box>
    )
}