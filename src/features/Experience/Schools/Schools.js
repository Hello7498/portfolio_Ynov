import React from 'react';
import { Box } from 'grommet';
import { CaretUp } from 'grommet-icons';
import { OneSchool } from './OneSchool';
import {useSelector} from 'react-redux'
import {selectLanguage} from '../../Languages/languageSlice';
import { languageJSON } from '../../Languages/Languages'




export const Schools = () => {

    const language = useSelector(selectLanguage)

    return (
        <Box
            align="center"
            gap="medium"
        >
            <OneSchool
                logoPath="ynov-logo.jpg"
                nameSchool={languageJSON[language].Schools.School1.Campus}
                nameFormation={languageJSON[language].Schools.School1.Formation}
                dateBegin="2019"
                DateEnd="2021"
            />
            <CaretUp
                size="large"
            />
            <OneSchool
                logoPath="iut-logo.png"
                nameSchool={languageJSON[language].Schools.School2.Campus}
                nameFormation={languageJSON[language].Schools.School2.Formation}
                dateBegin="2018"
                DateEnd="2019"
            />
            <CaretUp
                size="large"
            />
            <OneSchool
                logoPath="iut-logo.png"
                nameSchool={languageJSON[language].Schools.School3.Campus}
                nameFormation={languageJSON[language].Schools.School3.Formation}
                dateBegin="2016"
                DateEnd="2018"
            />

        </Box>
    )
}