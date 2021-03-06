import React from 'react';
import { Box, Grommet } from 'grommet';
import { Profil } from './features/Profil/Profil';
import { Experience } from './features/Experience/Experience'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  avatar: {
    size: {
      myLarge: '150px',
    },
    extend: `border: 2px solid black;`
  },
  accordion: {
    border: undefined,
  },
};

function App() {
  return (
    <Grommet theme={theme} full background="neutral-3">
      <Box
        pad="small"
        margin="small"
        background="light-2"
        round="small"
        animation={{ type: "slideDown", duration: 750 }}
      >
        <Profil />
      </Box>
      <Box
        round="small"
        pad="small"
        margin="small"
        background="light-3"
        animation={{ type: "slideUp", duration: 750 }}

      >
        <Experience />
      </Box>
      <Box
        pad="small"
        margin="small"
        background="light-2"
        round="small"
        animation={{ type: "slideDown", duration: 750 }}
      >
      </Box>
    </Grommet>
  )
}

export default App;
