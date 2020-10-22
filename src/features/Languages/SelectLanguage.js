import React from 'react';
import { Select } from 'grommet';
import { useDispatch } from 'react-redux'
import { fr, en } from '../Languages/languageSlice';


export const SelectLanguage = () => {
    const dispatch = useDispatch()
    const options = ['fr', 'en'];
    const [value, setValue] = React.useState('fr');

    function changeLanguage(option) {
        setValue(option)
        console.log('Value :' + option)
        if(option === "en") {
            dispatch(en())
        }else{
            dispatch(fr())
        }
 

    }
    return (

        <Select
            id="select"
            name="select"
            placeholder="Select"
            value={value}
            options={options}
            onChange={({ option }) => changeLanguage(option)}
        />
    )
}