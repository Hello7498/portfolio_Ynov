import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        value: "fr",
    },
    reducers: {
        fr: state => {  
            state.value = "fr"
        },
        en: state => {
            state.value = "en"
        },
    }
})
export const { fr, en } = languageSlice.actions;
export const selectLanguage = state => state.language.value;
export default languageSlice.reducer;