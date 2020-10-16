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
  }
};

function App() {
  return (
    <Grommet theme={theme} full>
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
        animation={{type:"zoomIn",duration:750}}

      >
        <Experience />
      </Box>
    </Grommet>
  )
}

export default App;
